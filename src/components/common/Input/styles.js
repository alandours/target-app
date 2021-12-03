import { StyleSheet } from 'react-native';

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
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
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
});

export default styles;
