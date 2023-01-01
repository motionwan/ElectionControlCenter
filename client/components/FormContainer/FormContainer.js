import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get('window').width,
  },
});
export default FormContainer;
