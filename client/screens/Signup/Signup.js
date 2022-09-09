import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Signup.styles';
import {
  FormHeading,
  UserInput,
} from '../../components/FormComponents/FormComponents';
import { SuccessButton } from '../../components/Button/Button';
import axios from 'axios';
import RoundLogo from '../../components/RoundLogo/RoundLogo';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignUpSchema } from '../../FormSchema/SignUpSchema';
import { BASE_URL } from '../../Config';

const Signup = ({ navigation }) => {
  const [error, setError] = useState(null);
  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{
          fullName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, formikActions) => {
          try {
            const res = await axios.post(`${BASE_URL}/users/signup`, {
              fullName: values.fullName,
              username: values.username,
              email: values.email,
              password: values.password,
            });
            if (res.data.message) {
              setError(res.data.message);
              console.log(res.data.message);
            }
            if (!res.data.message) {
              formikActions.resetForm();
            }
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <>
              <View>
                <View style={styles.container}>
                  <RoundLogo />
                  <View style={styles.heading}>
                    <FormHeading label='Sign Up' />
                  </View>
                  <View>
                    <UserInput
                      label='Full Name'
                      placeholder='e.g Benjamin Mordedzi'
                      value={values.fullName}
                      onChangeText={handleChange('fullName')}
                      handleBlur={handleBlur('fullName')}
                      error={touched.fullName && errors.fullName}
                      autoCapitalize='words'
                      autoCorrect={false}
                    />
                    <UserInput
                      label='username'
                      placeholder='e.g benjamin2'
                      value={values.username}
                      onChangeText={handleChange('username')}
                      handleBlur={handleBlur('username')}
                      error={touched.username && errors.username}
                      autoCompleteType='email'
                      keyboardType='email-address'
                      autoCapitalize='none'
                    />
                    <UserInput
                      label='Email'
                      placeholder='e.g benjamin@example.com'
                      value={values.email}
                      onChangeText={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      error={touched.email && errors.email}
                      autoCompleteType='email'
                      keyboardType='email-address'
                      autoCapitalize='none'
                    />
                    <UserInput
                      label='Password'
                      value={values.password}
                      onChangeText={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      error={touched.password && errors.password}
                      secureTextEntry={true}
                      autoCompleteType='password'
                    />
                    <UserInput
                      label='Confirm Password'
                      value={values.repeatPassword}
                      onChangeText={handleChange('confirmPassword')}
                      handleBlur={handleBlur('confirmPassword')}
                      error={touched.confirmPassword && errors.confirmPassword}
                      secureTextEntry={true}
                      autoCompleteType='password'
                    />
                    <View style={styles.emailAlreadyExists}>
                      <Text style={styles.emailAlreadyExistsText}>{error}</Text>
                    </View>
                    <SuccessButton label='Sign Up' onPress={handleSubmit} />
                  </View>
                </View>
                <View style={styles.already}>
                  <Text>
                    Already have an account?{' '}
                    <Text
                      onPress={() => navigation.navigate('SignIn')}
                      style={styles.signIn}
                    >
                      Sign In
                    </Text>
                  </Text>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
