import { StyleSheet } from 'react-native';
import { ERROR } from 'constants/colors';

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    height: 37,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    width: 188,
  },
  inputActive: {
    borderColor: '#666666',
  },
  inputError: {
    borderColor: ERROR,
  },
  label: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 11,
    letterSpacing: 1.65,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 24,
  },
  error: {
    alignSelf: 'center',
    color: ERROR,
    fontSize: 10,
    height: 14,
    marginTop: 2,
    textAlign: 'center',
    width: 222,
  },
});

export default styles;
