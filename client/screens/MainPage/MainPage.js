import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { PrimaryButton, SuccessButton } from '../../components/Button/Button';
import styles from './MainPage.styles';
import { AuthContext } from '../../Context/AuthContext';

const Drawer = createDrawerNavigator();

const MainPage = () => {
  const { logout } = useContext(AuthContext);
  return <Drawer.Navigator></Drawer.Navigator>;
};

export default MainPage;
