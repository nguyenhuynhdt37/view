import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WheelPicker from "react-native-wheel-picker-android";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log("WheelPicker", WheelPicker);

const getDaysInMonth = (monthIndex, year) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) =>
  (currentYear - i).toString()
);

const BirthdatePicker = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [days, setDays] = useState(
    Array.from({ length: 31 }, (_, i) => (i + 1).toString())
  );

  useEffect(() => {
    const newDays = Array.from(
      { length: getDaysInMonth(selectedMonth, currentYear - selectedYear) },
      (_, i) => (i + 1).toString()
    );
    setDays(newDays);
    if (selectedDay >= newDays.length) {
      setSelectedDay(newDays.length - 1);
    }
  }, [selectedMonth, selectedYear]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>When’s your birthday?</Text>
      <Text style={styles.subtitle}>
        Your birthday won't be shown publicly.
      </Text>

      <Text style={styles.dateText}>
        {years[selectedYear]}-{String(selectedMonth + 1).padStart(2, "0")}-
        {days[selectedDay]}
      </Text>

      {/* <View style={styles.pickerContainer}>
        <WheelPicker
          selectedItem={selectedMonth}
          data={months}
          onItemSelected={setSelectedMonth}
          style={styles.picker}
        />
        <WheelPicker
          selectedItem={selectedDay}
          data={days}
          onItemSelected={setSelectedDay}
          style={styles.picker}
        />
        <WheelPicker
          selectedItem={selectedYear}
          data={years}
          onItemSelected={setSelectedYear}
          style={styles.picker}
        />
      </View> */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  dateText: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: { width: 120, height: 150 },
  button: {
    backgroundColor: "#ff3b5c",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default BirthdatePicker;
