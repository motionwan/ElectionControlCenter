import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./FormComponents.styles";

export const FormHeading = ({ label }) => {
  return (
    <View>
      <Text style={styles.heading}>{label}</Text>
    </View>
  );
};

export const UserInput = ({
  label,
  placeholder,
  setValue,
  value,
  autoCapitalize,
  autoCompleteType,
  secureTextEntry,
  keyboardType,
  autoComplete,
  autoCorrect,
}) => {
  return (
    <View>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCompleteType={autoCompleteType}
        />
      </View>
    </View>
  );
};
