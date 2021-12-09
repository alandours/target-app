import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    height: '100%',
    flexShrink: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
