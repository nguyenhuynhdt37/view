import { Provider } from "react-redux";
import "./global.css";
import { useFonts } from "expo-font";
import store from "@/store";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Lexend-Regular": require("@/assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Bold": require("@/assets/fonts/Lexend-Bold.ttf"),
    "Lexend-Medium": require("@/assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Light": require("@/assets/fonts/Lexend-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
