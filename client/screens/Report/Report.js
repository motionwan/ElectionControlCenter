import { View, Text, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import styles from './Report.styles';
import {
  TextArea,
  UserInput,
} from '../../components/FormComponents/FormComponents';
import { DangerButton } from '../../components/Button/Button';
import { AuthContext } from '../../Context/AuthContext';

const Report = () => {
  const { logout } = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formHeading}>
          <Text style={styles.heading}>Report malpractice or Fraud</Text>
        </View>
        <UserInput label='Title' />
        <UserInput label='Electoral commission Agent name' />
        <UserInput label='Electoral commission Agent i.d number' />
        <TextArea label='Report' />
        <UserInput label='Media files / Evidence' />
        <Text>Rating goes here</Text>
        <DangerButton label='Submit Report' />
      </View>
    </ScrollView>
  );
};

export default Report;
