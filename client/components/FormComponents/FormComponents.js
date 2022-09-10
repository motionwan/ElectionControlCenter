import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './FormComponents.styles';

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
  error,
  value,
  autoCapitalize,
  autoCompleteType,
  secureTextEntry,
  keyboardType,
  autoComplete,
  onChangeText,
  autoCorrect,
}) => {
  return (
    <View>
      <View style={styles.labelAndErrorContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.error}>{error ? error : null}</Text>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
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

export const TextArea = ({
  label,
  placeholder,
  error,
  value,
  autoCapitalize,
  autoCompleteType,
  secureTextEntry,
  keyboardType,
  autoComplete,
  onChangeText,
  autoCorrect,
}) => {
  return (
    <View>
      <View>
        <View style={styles.labelAndErrorContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.error}>{error ? error : null}</Text>
        </View>

        <View style={styles.textAreaInput}>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCompleteType={autoCompleteType}
          />
        </View>
      </View>
    </View>
  );
};
