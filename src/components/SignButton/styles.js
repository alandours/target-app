import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderTopColor: BLACK,
    borderTopWidth: 1,
    padding: 15.5,
    marginTop: 19,
    width: 121,
  },
  button: {
    display: 'flex',
    fontSize: 11,
    letterSpacing: 1.65,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
