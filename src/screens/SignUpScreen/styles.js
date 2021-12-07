import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default styles;
