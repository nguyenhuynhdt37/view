import { Tabs } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import HomeIcon from "@/assets/icons/home.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import MailIcon from "@/assets/icons/mail.svg";
import AddIcon from "@/assets/icons/add.svg";
import SearchIcon from "@/assets/icons/search.svg";
const TabIcon = ({ title, focused, Icon }: any) => {
  return (
    <View className="flex-col w-full h-full items-center justify-center">
      <Icon width={20} height={20} fill={focused ? "#000" : "#666"} />
      <Text
        numberOfLines={1}
        className={`text-[0.8rem] min-w-28 font-lexend text-center ${
          !focused ? "text-[#000]" : "text-[#000]"
        }`}
      >
        {title}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: (props) => <Pressable {...props} android_ripple={null} />,

        tabBarStyle: {
          paddingTop: 5,
          minHeight: 50,
          backgroundColor: "rgba(0, 0, 0, 0)", // Trong suốt hoàn toàn
          elevation: 0, // Xóa bóng trên Android
          borderTopWidth: 0.2, // Xóa đường viền trên iOS
          // position: "absolute", // Tránh chiếm không gian layout
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Trang chủ" Icon={HomeIcon} focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Tìm kiếm" Icon={SearchIcon} focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="live"
        options={{
          tabBarIcon: ({ focused }) => {
            return <View></View>;
          },
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Thông báo" Icon={MailIcon} focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon title="Cá nhân" Icon={ProfileIcon} focused={focused} />
            );
          },
        }}
      />
    </Tabs>
  );
}
