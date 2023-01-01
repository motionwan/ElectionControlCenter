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
  const [voteCount, setVoteCount] = useState([{ party: '', count: 0 }]);
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

  const handleVoteCount = (party, vote, index, fieldName) => {
    let data = [...voteCount];
    data[index] = { party, count: Number(vote) };
    setVoteCount(data);
    // console.log(vote, fieldName);
  };

  const isValidForm = () => {
    voteCount.map((vote) => {
      if (!String(vote.count).trim()) {
        setErrMsg('Vote Gained cannot be empty');
        console.log('first');
      } else if (isNaN(vote.count))
        return setErrMsg('Vote Gained must be a number');
      else {
        setErrMsg('');
      }
    });
  };

  const submitForm = () => {
    if (isValidForm()) {
      console.log(voteCount);
    }
  };

  console.log(voteCount);

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
          {errMsg ? (
            <View style={styles.errorView}>
              <Text style={styles.error}>{errMsg}</Text>
            </View>
          ) : null}
          <FormContainer>
            {parties.map((party, index) => {
              return (
                <UserInput
                  key={index}
                  label={party.abbreviation}
                  value={voteCount.count}
                  onChangeText={(count) => {
                    handleVoteCount(party.id, count, index, 'vote');
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
  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
