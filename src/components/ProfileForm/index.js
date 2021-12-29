import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { func } from 'prop-types';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import { updateProfile, changePassword } from 'actions/userActions';
import PasswordForm from 'components/PasswordForm';
import Input from 'components/common/Input';
import ErrorView from 'components/common/ErrorView';
import MainButton from 'components/common/MainButton';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import profileValidations from 'validations/profileValidations';

import strings from 'localization';

import styles from './styles';

const FIELDS = {
  username: 'username',
  email: 'email',
  password: 'password',
};

const ProfileForm = ({ onSubmit }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const profile = useSelector(({ session: { profile } }) => profile);
  const dispatch = useDispatch();
  const changePasswordRequest = useCallback(data => dispatch(changePassword(data)), [dispatch]);

  const { error, status } = useStatus(updateProfile);

  const validator = useValidation(profileValidations);

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
      initialValues: profile,
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
    if (status === SUCCESS) {
      setSuccessMessage(true);
    } else {
      setSuccessMessage(false);
    }
  }, [status, dispatch]);

  return (
    <>
      <Input
        label={strings.PROFILE.username}
        autoCapitalize="none"
        testID="username-input"
        {...inputProps(FIELDS.username)}
      />
      <Input
        label={strings.PROFILE.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.email)}
      />
      <TouchableOpacity activeOpacity={1} onPress={() => setShowPasswordModal(true)}>
        <View pointerEvents="none">
          <Input
            label={strings.PROFILE.password}
            testID="fake-password-input"
            secureTextEntry
            editable={false}
            {...inputProps(FIELDS.password)}
            value="12345678"
          />
        </View>
      </TouchableOpacity>
      <ErrorView errors={{ error }} />
      {successMessage && <Text style={styles.successMessage}>{strings.PROFILE.success}</Text>}
      <MainButton
        testID="profile-submit-button"
        onPress={handleSubmit}
        disabled={formHasErrors}
        buttonStyles={styles.saveButton}
        text={status === LOADING ? strings.COMMON.loading : strings.PROFILE.button}
      />
      <Modal isVisible={showPasswordModal}>
        <TouchableOpacity
          onPress={() => setShowPasswordModal(false)}
          activeOpacity={1}
          style={styles.modalContainer}>
          <TouchableOpacity style={styles.modal} activeOpacity={1}>
            <PasswordForm
              onSubmit={changePasswordRequest}
              setShowPasswordModal={setShowPasswordModal}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

ProfileForm.propTypes = {
  onSubmit: func.isRequired,
};

export default ProfileForm;
