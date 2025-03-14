import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ProfileIcon from "@/assets/icons/profile.svg";
import { useRouter } from "expo-router";
const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <View className='items-center flex-1 justify-center'>
      <ProfileIcon width={60} height={60} />
      <Text className='font-lexend-light text-secondary mt-5'>
        Đăng nhập vào tài khoản hiện có
      </Text>
      <TouchableOpacity
        onPress={handleLogin}
        className='bg-primary py-4 px-20 bg-[#ff4354] rounded-lg mt-5'
      >
        <Text className='text-primary font-lexend text-white'>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
