import { View, Text } from "react-native";
import React, { useContext } from "react";
import { PrimaryButton, SuccessButton } from "../../components/Button/Button";
import styles from "./MainPage.styles";
import { AuthContext } from "../../Context/AuthContext";

const MainPage = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>MainPage</Text>
      <PrimaryButton
        onPress={() => {
          logout();
        }}
        label="Logout"
      />
    </View>
  );
};

export default MainPage;
