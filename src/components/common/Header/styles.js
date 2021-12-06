import { StyleSheet, Dimensions } from 'react-native';
import { BLACK } from 'constants/colors';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width / 1.6);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  welcome: {
    color: BLACK,
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: '500',
    margin: 10,
    marginBottom: 68,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  circles: {
    height: imageHeight,
    left: 0,
    position: 'absolute',
    top: 0,
    width: imageWidth,
  },
});

export default styles;
