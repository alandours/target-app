import { StyleSheet } from 'react-native';
import { MAIN_TRANSPARENT, SECONDARY_TRANSPARENT } from 'constants/colors';

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: MAIN_TRANSPARENT,
    borderRadius: 50,
    height: 55,
    justifyContent: 'center',
    width: 55,
  },
  markerSelected: {
    backgroundColor: SECONDARY_TRANSPARENT,
  },
  marker: {
    alignSelf: 'center',
    width: 16,
    height: 16,
  },
});

export default styles;
