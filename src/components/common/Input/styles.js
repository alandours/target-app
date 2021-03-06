import { StyleSheet } from 'react-native';
import { ERROR, BLACK, GREY, DARKGREY, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    height: 37,
    borderColor: GREY,
    borderWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    width: 188,
  },
  inputActive: {
    borderColor: DARKGREY,
  },
  inputError: {
    borderColor: ERROR,
  },
  label: {
    alignSelf: 'center',
    color: BLACK,
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
  createInputContainer: {
    marginBottom: 11,
  },
  createInput: {
    justifyContent: 'center',
    paddingLeft: 12,
    width: 257,
  },
  createInputLabel: {
    alignSelf: 'flex-start',
    letterSpacing: 0.7,
  },
});

export default styles;
