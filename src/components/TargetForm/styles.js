import { StyleSheet } from 'react-native';
import { BLACK, ERROR, MAIN_TRANSPARENT, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  targetForm: {
    alignSelf: 'center',
    marginTop: 15,
    width: 257,
  },
  saveButton: {
    height: 39,
    marginTop: 18,
    width: 157,
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    height: 39,
    width: 120,
  },
  deleteButton: {
    backgroundColor: ERROR,
    height: 39,
    width: 120,
  },
  topic: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingRight: 24,
  },
  topicLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
  },
  topicIcon: {
    marginRight: 8,
    width: 19,
  },
  hidden: {
    display: 'none',
  },
  error: {
    alignSelf: 'center',
    color: ERROR,
    fontSize: 10,
    height: 14,
    marginTop: 2,
    textAlign: 'center',
    width: 222,
  },
  modal: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    paddingBottom: 30,
    paddingTop: 30,
    paddingHorizontal: 17,
    width: 242,
  },
  modalTitle: {
    fontSize: 13,
    letterSpacing: 1.95,
    lineHeight: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTopicIconContainer: {
    alignSelf: 'center',
    backgroundColor: MAIN_TRANSPARENT,
    borderRadius: 50,
    height: 55,
    justifyContent: 'center',
    marginBottom: 9,
    width: 55,
  },
  modalTopicIcon: {
    alignSelf: 'center',
    height: 18,
    width: 18,
  },
  modalTopic: {
    fontSize: 11,
    letterSpacing: 0.5,
    lineHeight: 20,
    marginBottom: 17,
    textAlign: 'center',
  },
  modalSubtitle: {
    alignSelf: 'center',
    fontSize: 11,
    letterSpacing: 0.55,
    lineHeight: 18,
    textAlign: 'center',
    width: 184,
  },
  cancelButton: {
    color: BLACK,
    fontSize: 12,
    letterSpacing: 1.8,
    marginTop: 25,
    textAlign: 'center',
  },
});

export default styles;
