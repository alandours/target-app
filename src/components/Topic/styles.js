import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  topic: {
    borderBottomColor: BLACK,
    borderBottomWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  icon: {
    height: 19,
    marginRight: 12,
    width: 19,
  },
  name: {
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 1.95,
  },
});

export default styles;
