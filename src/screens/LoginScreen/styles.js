import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 10.5,
    marginBottom: 22,
  },
  facebookLoginButton: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 12,
    letterSpacing: 2.4,
    marginBottom: 41,
    textTransform: 'uppercase',
  },
});

export default styles;
