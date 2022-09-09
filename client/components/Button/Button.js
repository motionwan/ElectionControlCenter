import React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import styles from './Button.styles';

export const PrimaryButton = ({ label, onPress, loading, type }) => {
  return (
    <View>
      <TouchableOpacity type={type} onPress={onPress}>
        <View style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {loading ? 'Please wait...' : label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const SuccessButton = ({ label, type, onPress, loading }) => {
  return (
    <View>
      <TouchableOpacity type={type} onPress={onPress}>
        <View style={styles.successButton}>
          <Text style={styles.successButtonText}>
            {loading ? 'Please wait...' : label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const DangerButton = ({ label, onPress, loading }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.dangerButton}>
          <Text style={styles.dangerButtonText}>
            {loading ? 'Please wait...' : label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const PrimaryOutlineButton = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Animated.View style={styles.button}>
          <Text style={styles.buttonText}>{label}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};
export const SuccessOutlineButton = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Animated.View style={styles.button}>
          <Text style={styles.buttonText}>{label}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};
export const DangerOutlineButton = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Animated.View style={styles.button}>
          <Text style={styles.buttonText}>{label}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};
