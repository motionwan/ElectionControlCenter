import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const HomePage = () => {
  const auth = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: 'black' }}>MainPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
