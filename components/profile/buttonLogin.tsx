import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LucideIcon } from "lucide-react-native";
interface IButtonLogin {
  onPress: () => void;
  Icon?: any;
  Icon2?: any;
  title: string;
}
const ButtonLogin = ({ onPress, Icon, Icon2, title }: IButtonLogin) => {
  return (
    <TouchableOpacity className='py-3 flex-row items-center my-3 px-4 border-[1px] border-[#f1efef] rounded-lg'>
      {Icon2 ? (
        <Icon2 width={20} height={20} styles={{ color: "#ccc" }} />
      ) : (
        <Icon size={20} color='#000' />
      )}
      <Text className='font-lexend text-md flex-1 text-center'>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;
