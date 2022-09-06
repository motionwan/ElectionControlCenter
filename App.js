import Signup from "./screens/Signup/Signup";
import SignIn from "./screens/Signin/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LogIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
