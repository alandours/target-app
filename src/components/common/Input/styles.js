import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
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
    letterSpacing: 1.65,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 24,
  },
});

export default styles;
