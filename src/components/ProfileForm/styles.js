import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  saveButton: {
    height: 39,
    marginTop: 15,
    width: 157,
  },
  successMessage: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

export default styles;
