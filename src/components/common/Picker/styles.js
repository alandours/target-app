import { StyleSheet } from 'react-native';
import { BLACK, GREY } from 'constants/colors';

const styles = StyleSheet.create({
  picker: {
    alignSelf: 'center',
    color: BLACK,
    height: 37,
    borderColor: GREY,
    borderWidth: 1,
    fontSize: 10,
    justifyContent: 'center',
    letterSpacing: 1.5,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 188,
  },
  label: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 11,
    letterSpacing: 1.65,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  pickerContainer: {
    marginBottom: 24,
  },
});

export default styles;
