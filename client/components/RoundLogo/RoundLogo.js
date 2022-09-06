import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./RoundLogo.styles";

const RoundLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>
    </View>
  );
};

export default RoundLogo;
