import { StyleSheet } from 'react-native';
import React from 'react';
import Parliamentary from '../../../components/PresidentialVoteForm/ParliamentaryVoteForm';
import Presidential from '../../../components/ParliamentaryVoteForm/PresidentialVoteForm';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Presidential'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#00683B', paddingTop: 60 },
        style: styles.container,
      }}
    >
      <Tab.Screen
        name='Presidential'
        component={Presidential}
        options={{ tabBarLabel: 'Presidential' }}
      />
      <Tab.Screen
        name='Parliamentary'
        component={Parliamentary}
        topBarLabel='Parliamentary'
      />
    </Tab.Navigator>
  );
};

export default TopBarNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
