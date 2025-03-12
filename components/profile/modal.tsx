import { View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  X,
  CircleHelp,
  UserRound,
  CircleX,
  CircleAlert,
} from "lucide-react-native";
import ButtonLogin from "./buttonLogin";
import GoogleIcon from "@/assets/icons/google.svg";
import FaceBookIcon from "@/assets/icons/facebook.svg";
import LineErrror from "../error/LineErrror";
import { checkEmail } from "@/libs/handleCheckSyntax";
import { checkEmailAsync } from "@/axios/api";
// import * as process from "react-native-dotenv";
console.log("process", process);

interface IModel {
  setIsEnable: Dispatch<SetStateAction<boolean>>;
  isEnable: boolean;
}
interface Login {
  setIsEnable: Dispatch<SetStateAction<boolean>>;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
}
interface InfoRegiter {
  username: string;
  password?: string;
  email?: string;
}
const ModalAuth = ({ setIsEnable, isEnable }: IModel) => {
  const [step, setStep] = useState(0);

  return (
    <Modal animationType='slide' transparent={true} visible={isEnable}>
      {step === 0 && (
        <Login setIsEnable={setIsEnable} setStep={setStep} step={step} />
      )}
      {step === 1 && (
        <Register setIsEnable={setIsEnable} setStep={setStep} step={step} />
      )}
    </Modal>
  );
};

const Login = ({ setStep, step, setIsEnable }: Login) => {
  const handleLoginGoogle = () => {};
  return (
    <View className='flex-1 pt-24 relative'>
      <Text
        onPress={() => setStep(1)}
        className='bg-black h-full absolute top-0 left-0 right-0 opacity-30'
      ></Text>
      <View className='bg-white relative h-full rounded-t-xl'>
        <View className='px-4 py-3'>
          <View className='flex-row justify-between'>
            <CircleHelp size={27} color='#ccc' />
            <TouchableOpacity onPress={() => setIsEnable(false)}>
              <X size={27} color='#000' />
            </TouchableOpacity>
          </View>
          <Text className='text-4xl font-lexend-bold   pt-16 text-center mt-3 leading-10'>
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
          <TouchableOpacity onPress={() => setStep(1)}>
            <Text className='text-primary pl-1 font-lexend-medium text-[#ff4159]'>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Register = ({ setStep, setIsEnable, step }: Login) => {
  const [info, setInfo] = useState<InfoRegiter>({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const handleLoginGoogle = () => {};
  const handleContinus = async () => {
    if (!info?.username) {
      setErrors({ ...errors, username: "Vui lòng nhập thông tin" });
      return;
    }
    if (!checkEmail(info?.username)) {
      setErrors({
        ...errors,
        username: "Email không hợp lệ vui lòng nhập lại",
      });
      return;
    }
    // console.log(
    //   "process.env.NATIVE_PUBLIC_API_BASE_URL"
    //   NATIVE_PUBLIC_API_BASE_URL
    // );
    // const isEmptyEmail = await checkEmailAsync(info?.username);
    // console.log("isEmptyEmail", isEmptyEmail);
  };
  return (
    <View className='flex-1 pt-24 relative'>
      <Text
        onPress={() => setStep(1)}
        className='bg-black h-full absolute top-0 left-0 right-0 opacity-30'
      ></Text>
      <View className='bg-white relative h-full rounded-t-xl'>
        <View className='px-4 py-3'>
          <View className='flex-row justify-between'>
            <CircleHelp size={27} color='#ccc' />
            <TouchableOpacity onPress={() => setIsEnable(false)}>
              <X size={27} color='#000' />
            </TouchableOpacity>
          </View>
          <Text className='text-4xl font-lexend-bold pt-16 text-center mt-3 leading-10'>
            Đăng ký TikTok
          </Text>
          <Text className='text-center text-secondary font-lexend pt-2 pb-16'>
            Tạo hồ sơ , follow các tài khoản khác, quay video của chính bạn,
            v.v.
          </Text>
          <View>
            <View className='relative'>
              <TextInput
                onChangeText={(value: string) => {
                  setInfo({ ...info, username: value.toString() });
                  setErrors({ ...errors, username: "" });
                }}
                value={info.username}
                className={`py-4 px-4 font-lexend  placeholder:color-[#a5a5a7] rounded-lg pr-10 ${
                  errors.username
                    ? "border-2 border-[#f2401c] bg-[#fff]"
                    : "bg-[#f2f2f2]"
                }`}
                placeholder='Nhập Email của bạn để tiếp tục !'
                numberOfLines={1}
              />
              {info?.username && (
                <TouchableOpacity
                  onPress={() => setInfo({ ...info, username: "" })}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2'
                >
                  <CircleX width={20} height={20} color={"#9d9d9d"} />
                </TouchableOpacity>
              )}
            </View>
            {errors.username && (
              <LineErrror title={errors.username} Icon={CircleAlert} />
            )}
            <TouchableOpacity
              onPress={handleContinus}
              className='w-full bg-[#ff4354] rounded-xl mt-5 py-4'
            >
              <Text className='text-center font-lexend-medium text-white text-md'>
                Tiếp tục
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row justify-between'>
            <TextInput className='px-4 py-2 border-secondary' />
          </View>
          <View className='relative mb-10'>
            <View className='border-t-[1px] border-[#e4e1e4]'></View>
            <Text className='text-[#8c8c8c] px-5 bg-white absolute left-1/2 top-1/2 -translate-y-[0.7rem]  transform -translate-x-1/2'>
              hoặc
            </Text>
          </View>
          <View>
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
          <Text className='font-lexend'>Bạn đã có tài khoản ?</Text>
          <TouchableOpacity onPress={() => setStep(0)}>
            <Text className='text-primary pl-1 font-lexend-medium text-[#ff4159]'>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ModalAuth;
