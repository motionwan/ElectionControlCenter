import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './ProfilePic.styles';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/profilePic.jpg')}
      />
    </View>
  );
};

export default ProfilePic;
