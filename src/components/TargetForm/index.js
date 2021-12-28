import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { func, number, shape, string } from 'prop-types';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import { createTarget, deleteTarget } from 'actions/targetActions';

import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import useValidation from 'hooks/useValidation';
import strings from 'localization';
import targetValidations from 'validations/targetValidations';

import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import MainButton from 'components/common/MainButton';
import Topics from 'components/Topics';

import inputStyles from 'components/common/Input/styles';
import styles from './styles';

const FIELDS = {
  radius: 'radius',
  title: 'title',
  topic: 'topic_id',
};

const TargetForm = ({ selectedTarget, onDeleteTarget, onSubmit, onSuccess }) => {
  const [showTopics, setShowTopics] = useState(false);
  const [topic, setTopic] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const topics = useSelector(({ targets: { topics } }) => topics);

  const { error: deleteError, status: deleteStatus } = useStatus(deleteTarget);
  const { status: createStatus } = useStatus(createTarget);

  const validator = useValidation(targetValidations);

  const {
    values,
    errors,
    handleValueChange,
    handleSubmit,
    handleFocus,
    handleBlur,
    activeFields,
    touched,
    formHasErrors,
    setValues,
  } = useForm(
    {
      onSubmit,
      validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(
    handleValueChange,
    handleFocus,
    handleBlur,
    values,
    errors,
    activeFields,
    touched,
  );

  useEffect(() => {
    if (selectedTarget) {
      const { radius, title, topicId } = selectedTarget;
      setValues({
        radius: radius.toString(),
        title,
        topicId,
      });
      setTopic(topics[selectedTarget.topicId]);
    }
  }, [selectedTarget, topics, setValues]);

  useEffect(() => {
    if (createStatus === SUCCESS) {
      onSuccess(createTarget);
    }

    if (deleteStatus === SUCCESS) {
      onSuccess(deleteTarget);
    }
  }, [createStatus, deleteStatus, onSuccess]);

  const selectTopic = topic => {
    setTopic(topic);
    setShowTopics(false);
    inputProps(FIELDS.topic).onChangeText(topic.id);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.targetForm}>
        <Input
          label={strings.TARGET.radius}
          testID="target-radius"
          keyboardType="number-pad"
          createInput
          editable={!selectedTarget}
          {...inputProps(FIELDS.radius)}
        />
        <Input
          label={strings.TARGET.title}
          placeholder={strings.TARGET.titlePlaceholder}
          testID="target-title"
          createInput
          editable={!selectedTarget}
          {...inputProps(FIELDS.title)}
        />
        <View style={styles.container}>
          <Text style={styles.label}>{strings.TARGET.topics}</Text>
          <TouchableOpacity
            onPress={() => setShowTopics(true)}
            style={[inputStyles.input, inputStyles.createInput]}>
            {topic && (
              <View style={styles.topic}>
                <Image style={styles.topicIcon} source={{ uri: topic.icon }} />
                <Text style={styles.topicLabel}>{topic.label}</Text>
              </View>
            )}
            {!topic && <Text>{strings.TARGET.topicsPlaceholder}</Text>}
          </TouchableOpacity>
        </View>
        <View style={styles.hidden}>
          <Input
            label={strings.TARGET.topics}
            testID="target-topics"
            {...inputProps(FIELDS.topic)}
            value={topic && topic.id.toString()}
          />
        </View>
        {selectedTarget ? (
          <View style={styles.editActions}>
            <MainButton
              testID="delete-target-button"
              onPress={() => setShowDeleteModal(true)}
              buttonStyles={styles.deleteButton}
              text={strings.TARGET.delete}
            />
            <MainButton
              testID="edit-target-button"
              onPress={() => {}}
              buttonStyles={styles.editButton}
              text={strings.TARGET.edit}
            />
          </View>
        ) : (
          <MainButton
            testID="save-target-button"
            onPress={handleSubmit}
            disabled={formHasErrors}
            buttonStyles={styles.saveButton}
            text={createStatus === LOADING ? strings.COMMON.loading : strings.TARGET.save}
          />
        )}
      </View>
      {showTopics && <Topics selectTopic={selectTopic} />}
      {selectedTarget && (
        <Modal isVisible={showDeleteModal}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>{strings.TARGET.deleteTitle}</Text>
            <View style={styles.modalTopicIconContainer}>
              <Image
                style={styles.modalTopicIcon}
                source={{ uri: topics[selectedTarget.topicId].icon }}
              />
            </View>
            <Text style={styles.modalTopic}>{selectedTarget.title}</Text>
            <Text style={styles.modalSubtitle}>{strings.TARGET.deleteSubtitle}</Text>
            <ErrorView errors={{ deleteError }} />
            <MainButton
              testID="confirm-delete-button"
              onPress={onDeleteTarget}
              buttonStyles={styles.saveButton}
              text={deleteStatus === LOADING ? strings.COMMON.loading : strings.TARGET.delete}
            />
            <TouchableOpacity onPress={() => setShowDeleteModal(false)}>
              <Text style={styles.cancelButton}>{strings.TARGET.deleteCancel}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

TargetForm.propTypes = {
  selectedTarget: shape({ id: number, title: string, radius: number, topicId: number }),
  onDeleteTarget: func,
  onSubmit: func.isRequired,
  onSuccess: func,
};

export default TargetForm;
