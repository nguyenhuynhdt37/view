import { checkEmailAsync } from "@/axios/api";
import { checkEmail } from "@/libs/handleCheckSyntax";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  Check,
  CircleAlert,
  CircleHelp,
  CircleX,
  EyeClosed,
  EyeOff,
  UserRound,
  X,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import LineErrror from "../error/LineErrror";
import ButtonLogin from "../profile/buttonLogin";
import BirthdatePicker from "../date/GetDate";
import GoogleIcon from "@/assets/icons/google.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import { getFormattedDate } from "@/libs/hepper";
import LoadingButton from "../loading";

const Register = () => {
  const [stepRegister, setStepRegister] = useState(0);
  const [info, setInfo] = useState({
    username: "",
    password: "",
    birthday: "",
  });

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });
  const handleLoginGoogle = () => {};
  const [loadding, setLoadding] = useState(false);
  const [checkPasswordsatisfied, setCheckPasswordsatisfied] = useState({
    value1: false,
    value2: false,
    value3: false,
  });
  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      setInfo({
        ...info,
        birthday: getFormattedDate(selectedDay, selectedMonth, selectedYear),
      });
    }
  }, [selectedDay, selectedMonth, selectedYear]);
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
    setLoadding(true);
    const isEmptyEmail = await checkEmailAsync(info?.username);
    setLoadding(false);
    if (!isEmptyEmail) {
      setErrors({
        ...errors,
        username: "Email đã tồn tại vui lòng nhập lại",
      });
      return;
    }
    setStepRegister(1);
  };
  const handleOnchangePassword = (value: string) => {
    setInfo({ ...info, password: value.toString() });
    setErrors({ ...errors, password: "" });
    const hasLetterAndNumber = /[a-zA-Z]/.test(value) && /\d/.test(value);
    const isValidLength = value.length >= 8 && value.length <= 20;
    const containsSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setCheckPasswordsatisfied({
      value1: isValidLength,
      value2: hasLetterAndNumber,
      value3: containsSpecialCharacter,
    });
  };
  console.log("info", info);

  return (
    <View className='flex-1 relative'>
      {stepRegister === 0 && (
        <View>
          <View className='bg-white relative h-full rounded-t-xl'>
            <View className='px-4 py-3'>
              <View className='flex-row justify-between'>
                <CircleHelp size={27} color='#ccc' />
                <TouchableOpacity onPress={() => router.back()}>
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
                  disabled={loadding}
                  onPress={handleContinus}
                  className='w-full bg-[#ff4354] rounded-xl mt-5 py-4'
                >
                  {loadding ? (
                    <Text className='text-center font-lexend-medium text-white text-md'>
                      Tiếp tục
                    </Text>
                  ) : (
                    <View className='bg-black py-4  flex-1 flex-row justify-center'>
                      <LoadingButton />
                    </View>
                  )}
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
                  Icon2={FacebookIcon}
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
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text className='text-primary pl-1 font-lexend-medium text-[#ff4159]'>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {stepRegister === 1 && (
        <View className='bg-[#fff] flex-1 px-5 relative'>
          <View className='flex-row justify-between py-4'>
            <TouchableOpacity
              className='pr-3'
              onPress={() => setStepRegister(0)}
            >
              <ArrowLeft stroke={"#000"} width={25} height={25} />
            </TouchableOpacity>
            <Text className='font-lexend-bold text-lg'>Đăng ký</Text>
            <TouchableOpacity>
              <CircleHelp stroke={"#000"} width={25} height={25} />
            </TouchableOpacity>
          </View>
          <View className='px-4'>
            <Text className='font-lexend-bold mt-5 text-2xl text-center'>
              Tạo mật khẩu cho tài khoản của bạn
            </Text>
            <View className='relative'>
              <TextInput
                value={info.password}
                placeholder='Nhập mật khẩu của bạn'
                secureTextEntry={!isShowPassword}
                className='py-2 px-1 border-b-[1px] placeholder:text-secondary border-[#e4e1e4] font-lexend mt-5'
                onChangeText={handleOnchangePassword}
              />
              {info?.password && (
                <TouchableOpacity
                  onPress={() =>
                    setInfo({
                      ...info,
                      password: "",
                    })
                  }
                  className='absolute right-12 top-1/2'
                >
                  <CircleX size={18} stroke={"#999"} />
                </TouchableOpacity>
              )}
              {info?.password &&
                (!isShowPassword ? (
                  <TouchableOpacity
                    onPress={() => setIsShowPassword(true)}
                    className='absolute right-2 top-1/2'
                  >
                    <EyeClosed size={20} stroke={"#999"} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => setIsShowPassword(false)}
                    className='absolute right-2 top-1/2'
                  >
                    <EyeOff size={20} stroke={"#999"} />
                  </TouchableOpacity>
                ))}
            </View>
            <View className='py-2'>
              <View className='flex-row items-center py-1'>
                <Check
                  size={20}
                  stroke={!checkPasswordsatisfied.value1 ? "#ccc" : "#00b400"}
                />
                <Text
                  className={`${
                    !checkPasswordsatisfied.value1
                      ? "text-[#ccc]"
                      : "text-[#111]"
                  } ml-2 font-lexend `}
                >
                  8 ký tự (tối đa 20 ký tự)
                </Text>
              </View>
              <View className='flex-row items-center py-1'>
                <Check
                  size={20}
                  stroke={!checkPasswordsatisfied.value2 ? "#ccc" : "#00b400"}
                />
                <Text
                  className={`${
                    !checkPasswordsatisfied.value2
                      ? "text-[#ccc]"
                      : "text-[#111]"
                  } ml-2 font-lexend `}
                >
                  1 chữ cái và 1 số
                </Text>
              </View>
              <View className='flex-row items-center py-1'>
                <Check
                  size={20}
                  stroke={!checkPasswordsatisfied.value3 ? "#ccc" : "#00b400"}
                />
                <Text
                  className={`${
                    !checkPasswordsatisfied.value3
                      ? "text-[#ccc]"
                      : "text-[#111]"
                  } ml-2 font-lexend `}
                >
                  1 ký tự đặc biệt (Ví dụ: # ? ! $ & @)
                </Text>
              </View>
            </View>
          </View>
          <View className='flex-1 flex-row'>
            <TouchableOpacity
              onPress={() => setStepRegister(2)}
              disabled={
                !(
                  checkPasswordsatisfied.value1 &&
                  checkPasswordsatisfied.value2 &&
                  checkPasswordsatisfied.value3
                )
              }
              className={`bottom-5 px-20 left-1/2 transform -translate-x-1/2 py-4 absolute rounded-lg ${
                checkPasswordsatisfied.value1 &&
                checkPasswordsatisfied.value2 &&
                checkPasswordsatisfied.value3
                  ? "bg-[#ff4354]"
                  : "bg-[#ffbcc2]"
              }`}
            >
              <Text className='font-lexend text-white'>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {stepRegister === 2 && (
        <View className='bg-[#fff] flex-1 px-5 relative'>
          <View className='flex-row justify-between items-center py-4'>
            <TouchableOpacity onPress={() => setStepRegister(1)}>
              <ArrowLeft stroke={"#000"} width={25} height={25} />
            </TouchableOpacity>
            <Text className='font-lexend-bold text-center text-lg flex-1'>
              Đăng ký
            </Text>
          </View>
          <View className='px-4 flex-row justify-between pt-10 gap-3'>
            <View className='max-w-[70%]'>
              <Text className='font-lexend-bold text-xl'>
                Ngày sinh nhật của bạn
              </Text>
              <Text className='font-lexend-bold text-xl'>là ngày nào ?</Text>
              <Text className='font-lexend pt-5 text-secondary'>
                Ngày sinh của bạn sẽ không được hiển thị công khai
              </Text>
            </View>
            <View className='flex-1 items-center'>
              <Image
                className='size-24 object-contain'
                source={{
                  uri: "https://hienlaptop.com/wp-content/uploads/2024/12/26.png",
                }}
              />
            </View>
          </View>
          <BirthdatePicker
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
            selectedYear={selectedYear}
            setSelectedDay={setSelectedDay}
            setSelectedMonth={setSelectedMonth}
            setSelectedYear={setSelectedYear}
          />
          <View className='flex-1 absolute bottom-10 left-0 right-0 flex-row justify-center'>
            <TouchableOpacity
              disabled={!info.birthday}
              className={`py-4 px-20 rounded-lg  ${
                info.birthday ? "bg-[#ff4354]" : "bg-[#ffbcc2]"
              }`}
            >
              <Text className='font-lexend text-white'>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Register;
