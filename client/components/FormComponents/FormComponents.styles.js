import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    color: '#666',
    fontSize: 28,
  },
  label: {
    color: '#666',
    textTransform: 'uppercase',
  },
  labelAndErrorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginHorizontal: 9,
  },
  error: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: '#666',
    padding: 10,
    height: 45,
    borderRadius: 5,
    marginBottom: 30,
  },
});

export default styles;
