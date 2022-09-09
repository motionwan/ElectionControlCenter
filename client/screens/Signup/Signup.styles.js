import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 20,
    color: '#666',
  },
  emailAlreadyExists: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emailAlreadyExistsText: {
    color: 'red',
    fontSize: 17,
  },
  already: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginBottom: 50,
  },
  signIn: {
    color: '#0066FF',
  },
});

export default styles;
