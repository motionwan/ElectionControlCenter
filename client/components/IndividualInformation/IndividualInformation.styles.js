import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  namePlaceholder: {
    fontSize: 15,
    color: '#585858',
  },
  designationView: {
    alignItems: 'center',
    borderBottomColor: '#585858',
    borderBottomWidth: 1,
    marginVertical: 20,
    paddingVertical: 10,
  },
  designation: {
    fontSize: 20,
    color: '#585858',
  },
  last: {
    marginBottom: 20,
  },
});

export default styles;
