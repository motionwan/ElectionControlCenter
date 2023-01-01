/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import FormContainer from '../FormContainer/FormContainer';
import axios from 'axios';
import { BASE_URL } from '../../Config';
import { UserInput } from '../FormComponents/FormComponents';
import { SuccessButton } from '../Button/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../Context/AuthContext';
import { View, Text, StyleSheet } from 'react-native';

const PresidentialVoteForm = () => {
  const { userInfo } = useContext(AuthContext);
  const [parties, setParties] = useState([]);
  const [voteCount, setVoteCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  console.log(userInfo);

  useEffect(() => {
    const getPartyForConstituency = async () => {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/parties/`);
      setParties(res.data);
      setLoading(false);
    };
    getPartyForConstituency();
  }, []);

  const handleVoteCount = (party, vote, index) => {
    let data = [...voteCount];
    data[index] = { party: Number(party), vote: Number(vote) };
    if (isNaN(data[index].vote)) {
      setErrMsg(`Vote Gained MUST be a number. error at box ${[index + 1]}`);
    } else {
      setVoteCount(data);
    }
  };

  const submitForm = () => {
    if (voteCount.length <= 0) {
      console.log('first');
    }
    console.log(voteCount);
  };

  return (
    <ScrollView style={styles.inputs}>
      {loading ? (
        <View style={styles.loadingView}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Presidential Vote Record</Text>
          </View>
          <FormContainer>
            {errMsg ? (
              <View style={styles.errView}>
                <Text style={styles.err}>{errMsg}</Text>
              </View>
            ) : null}
            {parties.map((party, index) => {
              return (
                <UserInput
                  key={index}
                  label={party.abbreviation}
                  value={voteCount.count}
                  onChangeText={(count) => {
                    handleVoteCount(party.id, count, index);
                  }}
                />
              );
            })}
            <View style={styles.btnView}>
              <SuccessButton
                onPress={submitForm}
                label='Register Presidential Vote'
              />
            </View>
          </FormContainer>
        </>
      )}
    </ScrollView>
  );
};

export default PresidentialVoteForm;

const styles = StyleSheet.create({
  inputs: {
    paddingVertical: 20,
  },
  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  headingText: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#666',
  },
  loadingView: {
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  btnView: {
    paddingVertical: 60,
  },
  err: {
    marginVertical: 12,
    color: 'red',
    fontSize: 14,
  },
  errView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
