import { StyleSheet } from 'react-native';
import { ERROR } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  error: {
    color: ERROR,
    fontSize: 10,
    lineHeight: 12,
    marginTop: -16,
  },
});

export default styles;
