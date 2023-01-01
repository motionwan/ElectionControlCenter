import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SuccessButton } from '../../components/Button/Button';
import {
  FormHeading,
  UserInput,
} from '../../components/FormComponents/FormComponents';
import RoundLogo from '../../components/RoundLogo/RoundLogo';
import { AuthContext } from '../../Context/AuthContext';
import styles from './SignIn.styles';
import { Formik } from 'formik';
import { SignInSchema } from '../../FormSchema/SignInSchema';

const SignIn = ({ navigation }) => {
  const { login, errorMessage } = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          login(values.email, values.password);
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          touched,
          handleChange,
          handleBlur,
        }) => {
          return (
            <>
              <View style={styles.container}>
                <View>
                  <RoundLogo />
                </View>
                <View style={styles.heading}>
                  <FormHeading label='Sign In' />
                </View>
                <View>
                  <UserInput
                    label='email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={touched.email && errors.email}
                    autoCompleteType='email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                  />
                  <UserInput
                    label='password'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={touched.password && errors.password}
                    secureTextEntry={true}
                    keyboardType='password'
                  />
                  <View style={styles.invalidEmailPassword}>
                    <Text style={styles.invalidEmailText}>{errorMessage}</Text>
                  </View>
                </View>
                <View style={styles.btn}>
                  <SuccessButton label='Sign In' onPress={handleSubmit} />
                </View>
                <View style={styles.notRegistered}>
                  <Text>
                    Not registered?{' '}
                    <Text
                      onPress={() => navigation.navigate('SignUp')}
                      style={styles.signUp}
                    >
                      Sign up
                    </Text>
                  </Text>
                </View>
                <View style={styles.forgot}>
                  <Text style={styles.forgotText}>Forgot password?</Text>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
