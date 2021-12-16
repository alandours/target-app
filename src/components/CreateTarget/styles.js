import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'center',
    width: '100%',
  },
  createTarget: {
    fontSize: 11,
    letterSpacing: 1.65,
    textTransform: 'uppercase',
  },
  targetIcon: {
    alignSelf: 'center',
    height: 30,
    margin: 12,
    width: 30,
  },
});

export default styles;
