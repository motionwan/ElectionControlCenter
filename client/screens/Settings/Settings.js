import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { DangerButton } from '../../components/Button/Button';
import styles from './Settings.styles';

const Settings = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <DangerButton
        onPress={() => {
          logout();
        }}
        label='Sign Out'
      />
    </View>
  );
};

export default Settings;
