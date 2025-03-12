import { View, Text, TouchableOpacity } from "react-native";
import ListIcon from "@/assets/icons/list.svg";
const Header = () => {
  return (
    <View className="text-center  w-full  relative py-4 border-b-[0.1rem] border-gray-200">
      <Text className="text-center text-xl font-lexend-medium">Hồ sơ</Text>
      <TouchableOpacity className="absolute right-5 top-[1.2rem] transform  flex-end">
        <ListIcon width={22} height={22} fill="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
