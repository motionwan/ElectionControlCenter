import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  profileText: {
    alignItems: 'flex-end',
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  account: {
    color: '#707070',
  },
  edit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
    padding: 15,
    fontSize: 15,
    borderBottomColor: '#707070',

    borderBottomWidth: 1,
  },
  editText: {
    color: '#585858',
  },
});

export default styles;
