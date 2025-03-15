import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import index from "@/app/(root)/(tabs)/index";
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Ẩn header nếu cần
          //   animationEnabled: true, // Bật hiệu ứng chuyển trang
          gestureEnabled: true, // Vuốt để quay lại trên iOS/Android
          animationTypeForReplace: "push", // Kiểu animation
        }}
      >
        <Stack.Screen name='index' component={index} />
        {/* <Stack.Screen name='Profile' component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
