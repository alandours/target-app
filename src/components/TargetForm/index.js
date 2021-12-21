import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { func } from 'prop-types';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import { createTarget } from 'actions/targetActions';

import useForm from 'hooks/useForm';
import useTextInputProps from 'hooks/useTextInputProps';
import useValidation from 'hooks/useValidation';
import strings from 'localization';
import targetValidations from 'validations/targetValidations';

import Input from 'components/common/Input';
import MainButton from 'components/common/MainButton';
import Topics from 'components/Topics';

import inputStyles from 'components/common/Input/styles';
import styles from './styles';

const FIELDS = {
  radius: 'radius',
  title: 'title',
  topic: 'topic_id',
};

const TargetForm = ({ onSubmit, onCreateSuccess }) => {
  const [showTopics, setShowTopics] = useState(false);
  const [topic, setTopic] = useState(null);

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
    if (createStatus === SUCCESS) {
      onCreateSuccess();
    }
  }, [createStatus, onCreateSuccess]);

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
          {...inputProps(FIELDS.radius)}
        />
        <Input
          label={strings.TARGET.title}
          placeholder={strings.TARGET.titlePlaceholder}
          testID="target-title"
          createInput
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
        <View style={{ display: 'none' }}>
          <Input
            label={strings.TARGET.topics}
            testID="target-topics"
            {...inputProps(FIELDS.topic)}
            value={topic && topic.id.toString()}
          />
        </View>
        <MainButton
          testID="save-target-button"
          onPress={handleSubmit}
          disabled={formHasErrors}
          buttonStyles={styles.saveButton}
          text={createStatus === LOADING ? strings.COMMON.loading : strings.TARGET.save}
        />
      </View>
      {showTopics && <Topics selectTopic={selectTopic} />}
    </View>
  );
};

TargetForm.propTypes = {
  onSubmit: func.isRequired,
  onCreateSuccess: func,
};

export default TargetForm;
