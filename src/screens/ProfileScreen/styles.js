import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  profile: {
    backgroundColor: WHITE,
    height: '100%',
  },
  profileImages: {},
  profileBackground: {
    alignSelf: 'center',
    marginBottom: 20,
    marginRight: 82,
    width: 205,
    height: 145,
  },
  profilePicture: {
    alignSelf: 'center',
    height: 83,
    position: 'absolute',
    top: 41,
    width: 83,
  },
  logout: {
    marginBottom: 38,
    marginTop: 43,
  },
  logoutButton: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 14,
    letterSpacing: 0.7,
  },
});

export default styles;
