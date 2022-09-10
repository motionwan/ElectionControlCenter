import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../HomePage/HomePage';
import CoalitionCenter from '../../CoalitionCenter/CoalitionCenter';
import Report from '../../Report/Report';
import Profile from '../../Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Settings from '../../Settings/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: { backgroundColor: '#00683B' },
        tabBarInactiveTintColor: '#E7E7E7',
        tabBarActiveTintColor: '#D00B27',
      }}
    >
      <Tab.Screen
        name='HomePage'
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='home-outline' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='CoalitionCenter'
        component={CoalitionCenter}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='archive' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='Report'
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name='chatbubble-outline' color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='user' color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='settings' color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
