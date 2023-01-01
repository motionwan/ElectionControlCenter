import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 110,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1b1b33',
  },
  subHeading: {
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
  },
  touchWithoutFeedbackContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  presidentialButtonView: {
    height: 45,
    width: 170,
    borderWidth: 1,
    borderColor: '#00683B',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#00683B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  presidentialButtonText: {
    color: 'white',
    fontSize: 18,
  },
  parliamentaryButtonView: {
    height: 45,
    width: 170,
    borderWidth: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: '#00683B',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parliamentaryButtonText: {
    color: '#00683B',
    fontSize: 18,
  },
});
export default styles;
