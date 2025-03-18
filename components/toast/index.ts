import Toast from "react-native-toast-message";
interface ToastProps {
  message: string;
  title: string;
  text2: string;
}

export const showToast = ({ message, title, text2 }: ToastProps) => {
  Toast.show({
    type: message,
    text1: title,
    text2: text2,
  });
};
