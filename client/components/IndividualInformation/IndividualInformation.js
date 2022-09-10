import { View, Text } from 'react-native';
import React from 'react';
import styles from './IndividualInformation.styles';

const IndividualInformation = ({
  name,
  email,
  constituency,
  pollingStation,
  presidingOfficer,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.designationView}>
        <Text style={styles.designation}>Personal Information</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.namePlaceholder}>Name:</Text>
        <Text style={styles.namePlaceholder}>{name}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.namePlaceholder}>Email:</Text>
        <Text style={styles.namePlaceholder}>{email}</Text>
      </View>
      <View style={styles.designationView}>
        <Text style={styles.designation}>Designation</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.namePlaceholder}>Constituency Name:</Text>
        <Text style={styles.namePlaceholder}>{constituency}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.namePlaceholder}>Polling Station Name:</Text>
        <Text style={styles.namePlaceholder}>{pollingStation}</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.namePlaceholder}>Presiding Officer's Name:</Text>
        <Text style={styles.namePlaceholder}>{presidingOfficer}</Text>
      </View>
      <View style={styles.last}></View>
    </View>
  );
};

export default IndividualInformation;
