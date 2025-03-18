import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { ArrowLeft, CircleHelp, X } from "lucide-react-native";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { auth_otp_async } from "@/axios/api";
import { showToast } from "../toast";
import Toast from "react-native-toast-message";

interface EmailCheckProps {
  setStep?: (value: number) => void;
  info?: {
    email: string;
    password: string;
    birthday: string;
  };
}
const selectedYear = 0;
const EmailCheck = ({ setStep, info }: EmailCheckProps) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const showSnackbar = () => setVisible(true);
  const hideSnackbar = () => setVisible(true);
  const handleBlur = () => {};
  const handleOnchange = (text: string) => {
    if (error) setError("");
    if (text.length > 6) return;
    setOtp(text);
  };
  const handleSubmit = async () => {
    console.log("submit", otp, info?.email);
    if (otp.length == 6) {
      setLoading(true);
      const res = await auth_otp_async({
        email: "nguyenhuynhdt37gmail.com",
        otp: otp,
      });
      if (res?.status === 400) {
        alert();
        setError(res?.data?.detail);
        showToast({
          message: "error",
          title: "Có lỗi xẩy ra",
          text2: res?.data?.detail,
        });
        Toast.show({
          type: "success",
          text1: "alop",
          text2: "alo",
        });
      }

      setLoading(false);
    }
  };
  return (
    <View className='px-4 py-3 relative bg-white flex-1'>
      <View className='flex-row justify-between'>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={27} color='#000' />
        </TouchableOpacity>
        <CircleHelp size={27} color='#ccc' />
      </View>
      <Text className='font-lexend-bold text-center text-xl mt-4'>
        Xác nhận Email của bạn
      </Text>
      <View className=' flex-row justify-center items-center'>
        <LottieView
          source={require("../../assets/loadings/email.json")} // File JSON của animation
          autoPlay
          loop
          style={{
            width: 300,
            height: 200,
            opacity: 1,
            justifyContent: "center",
          }}
        />
      </View>
      <View className='pt-5 bg-white absolute top-1/2 left-0 right-0 transform px-5 -translate-y-1/2'>
        <Text className='font-lexend leading-5 text-center text-secondary'>
          Chúng tôi đã gửi 1 mã OTP bao gồm 6 số tới Email:
          <Text className='ps-2 font-lexend-medium text-black'>
            {" "}
            {info?.username}
          </Text>
        </Text>
        <View className='relative'>
          <TextInput
            onBlur={handleBlur}
            value={otp.toString()}
            onChangeText={handleOnchange}
            keyboardType='numeric'
            className={`${
              error
                ? "border-[#ff5f5f] bg-white"
                : "border-[#f4f4f4] bg-slate-50"
            } px-4 py-3 mt-5 border-2 rounded-md text-center font-lexend `}
          />
        </View>
        <View className='py-4 flex-row justify-between items-center'>
          <Text className='font-lexend'>Bạn chưa nhận được mã </Text>
          <TouchableOpacity
            onPress={() => {}}
            className='flex-row justify-center items-center'
          >
            <Text className='font-lexend text-[#ff3434]'>Gửi lại mã OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-1 absolute bottom-10 left-0 right-0 flex-row justify-center'>
        <TouchableOpacity
          disabled={error.length > 0 || otp.length < 6}
          onPress={handleSubmit}
          className={`py-4 px-20 rounded-lg  ${
            !error && otp.length == 6 ? "bg-[#ff4354]" : "bg-[#ffbcc2]"
          }`}
        >
          <Text className='font-lexend text-white'>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailCheck;
