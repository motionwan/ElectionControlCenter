import axios from "axios";
import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SuccessButton } from "../../components/Button/Button";
import {
  FormHeading,
  UserInput,
} from "../../components/FormComponents/FormComponents";
import RoundLogo from "../../components/RoundLogo/RoundLogo";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./SignIn.styles";

const SignIn = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("All fields are required");
    }
    try {
      const res = await axios.post(`http://192.168.0.105:3001/users/signin`, {
        email: email,
        password: password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
          <RoundLogo />
        </View>
        <View style={styles.heading}>
          <FormHeading label="Sign In" />
        </View>
        <View>
          <UserInput
            label="email"
            value={email}
            setValue={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <UserInput
            label="password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            keyboardType="password"
          />
        </View>
        <View style={styles.btn}>
          <SuccessButton
            onPress={() => {
              login(email, password);
            }}
            label="Sign In"
          />
        </View>
        <View style={styles.notRegistered}>
          <Text>
            Not registered?{" "}
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.signUp}
            >
              Sign up
            </Text>
          </Text>
        </View>
        <View style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
