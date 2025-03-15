import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const months = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const getDaysInMonth = (monthIndex: number, year: number) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) =>
  (currentYear - i).toString()
);

interface BirthdatePickerProps {
  selectedMonth: number;
  setSelectedMonth: (value: number) => void;
  selectedDay: number;
  setSelectedDay: (value: number) => void;
  selectedYear: number;
  setSelectedYear: (value: number) => void;
}

const BirthdatePicker = ({
  selectedDay,
  selectedMonth,
  selectedYear,
  setSelectedDay,
  setSelectedMonth,
  setSelectedYear,
}: BirthdatePickerProps) => {
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
    <View className='py-5'>
      <View className=''>
        <Picker
          selectedValue={selectedMonth}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}
        >
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
        >
          {days.map((day, index) => (
            <Picker.Item key={index} label={day} value={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
        >
          {years.map((year, index) => (
            <Picker.Item key={index} label={year} value={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default BirthdatePicker;
