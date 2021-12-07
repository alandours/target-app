import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: BLACK,
    height: 37,
    justifyContent: 'center',
    marginBottom: 11,
    marginTop: 8,
    width: 114,
  },
  text: {
    alignSelf: 'center',
    color: WHITE,
    fontSize: 11,
    letterSpacing: 1.65,
    textTransform: 'uppercase',
  },
});

export default styles;
