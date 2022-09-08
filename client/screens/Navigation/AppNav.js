import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Signin/SignIn";
import Signup from "../Signup/Signup";
import MainPage from "../MainPage/MainPage";

const Stack = createNativeStackNavigator();

const AppNav = () => {
  const { loading, token } = useContext(AuthContext);
  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {token !== null ? (
          <Stack.Screen name="MainPage" component={MainPage} />
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
        <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
