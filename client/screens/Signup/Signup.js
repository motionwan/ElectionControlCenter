import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./Signup.styles";
import {
  FormHeading,
  UserInput,
} from "../../components/FormComponents/FormComponents";
import { SuccessButton } from "../../components/Button/Button";
import axios from "axios";
import RoundLogo from "../../components/RoundLogo/RoundLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !repeatPassword) {
      alert("All fields are required");
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
    }
    if (password !== repeatPassword) {
      alert("Passwords do not match");
    }
    setLoading(false);
    try {
      const res = await axios.post(`http://192.168.0.105:3001/users/signup`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(res);
      // if res passes the test, send to the homepage
    } catch (err) {
      console.log(err);
      setLoading(false);
      return;
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View>
          <RoundLogo />
          <View style={styles.heading}>
            <FormHeading label="Sign Up" />
          </View>
          <View>
            <UserInput
              label="Name"
              placeholder="e.g Benjamin Johnson"
              value={name}
              setValue={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />
            <UserInput
              label="Email"
              placeholder="e.g benjamin@example.com"
              value={email}
              setValue={setEmail}
              autoCompleteType="email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <UserInput
              label="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
              autoCompleteType="password"
            />
            <UserInput
              label="Repeat Password"
              value={repeatPassword}
              setValue={setRepeatPassword}
              secureTextEntry={true}
              autoCompleteType="password"
            />
          </View>
          <SuccessButton
            loading={loading}
            onPress={handleSubmit}
            label="Sign Up"
          />
        </View>
        <View style={styles.already}>
          <Text>
            Already registered?{" "}
            <Text
              onPress={() => navigation.navigate("SignIn")}
              style={styles.signIn}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
