import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import styles from './Profile.styles';
import React, { useContext } from 'react';
import ProfilePic from '../../components/ProfilePic/ProfilePic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import IndividualInformation from '../../components/IndividualInformation/IndividualInformation';
import { AuthContext } from '../../Context/AuthContext';

const Profile = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <ProfilePic />
        <View style={styles.profileText}>
          <Text style={styles.profileTitle}>{userInfo.fullName}</Text>
        </View>
      </View>
      <View style={styles.edit}>
        <Text style={styles.editText}>Edit Account</Text>
        <Feather color={'#707070'} size={25} name='edit-2' />
      </View>
      <ScrollView>
        <IndividualInformation
          name={userInfo.fullName}
          email={userInfo.email}
          constituency='Keta'
          pollingStation='Primary 1 A E.P School'
          presidingOfficer='Benjamin Mordedzi'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
