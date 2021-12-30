import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  saveButton: {
    height: 39,
    marginTop: 15,
    width: 157,
  },
  modal: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    paddingBottom: 30,
    paddingTop: 30,
    paddingHorizontal: 17,
    width: 231,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 13,
    letterSpacing: 1.95,
    lineHeight: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  modalImage: {
    alignSelf: 'center',
    height: 78,
    width: 133,
  },
  successMessage: {
    alignSelf: 'center',
    color: BLACK,
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

export default styles;
