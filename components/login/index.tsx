import { CircleHelp, X, UserRound } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import GoogleIcon from "@/assets/icons/google.svg";
import FaceBookIcon from "@/assets/icons/facebook.svg";
import ButtonLogin from "../profile/buttonLogin";
import {} from "lucide-react-native";
import { router } from "expo-router";
const Login = () => {
  const handleLoginGoogle = () => {};
  return (
    <View className='flex-1 relative'>
      <View className='bg-white relative h-full rounded-t-xl'>
        <View className='px-4 py-3'>
          <View className='flex-row justify-between'>
            <CircleHelp size={27} color='#ccc' />
            <TouchableOpacity onPress={() => router.back()}>
              <X size={27} color='#000' />
            </TouchableOpacity>
          </View>
          <Text className='text-4xl font-lexend-bold mb-20 pt-16 text-center mt-3 leading-10'>
            Đăng nhập vào {"\n"} Tiktok
          </Text>

          <View>
            <ButtonLogin
              title='Sử dụng Email | SDT | Tên người dùng'
              Icon={UserRound}
              onPress={handleLoginGoogle}
            />
            <ButtonLogin
              title='Tiếp tục với Facebook'
              Icon={UserRound}
              Icon2={FaceBookIcon}
              onPress={handleLoginGoogle}
            />
            <ButtonLogin
              title='Tiếp tục với Google'
              Icon={UserRound}
              Icon2={GoogleIcon}
              onPress={handleLoginGoogle}
            />
          </View>
          <Text className='font-lexend pt-5 text-md text-center text-secondary'>
            Chọn tài khoản để đăng nhập
          </Text>
        </View>
        <View className='px-4 flex-row justify-center py-5 border-t-[1px] border-[#ededed] absolute left-0 right-0 bottom-0 bg-[#f7f7f9]'>
          <Text className='font-lexend'>Bạn không có tài khoản ?</Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text className='text-primary pl-1 font-lexend-medium text-[#ff4159]'>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
