import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
  const [name, setName] = useState("benjamin");
  const [email, setEmail] = useState("benjamin@example.com");
  const [password, setPassword] = useState("dkljfdls");
  const [repeatPassword, setRepeatPassword] = useState("ljsdlfsj");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !repeatPassword) {
      alert("All fields are required fields");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(`http://localhost:3001/api/signup`, {
        name: name,
        email: email,
        password: password,
        repeatPassword: repeatPassword,
      });
      console.log(`SIGN UP SUCCESSFUL => ${res.data}`);
      alert(`Success`);
    } catch (err) {
      console.log(err);
      setLoading(false);
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
              onPress={() => navigation.push("LogIn")}
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
