import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';

import { changePassword } from 'actions/userActions';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import passwordValidations from 'validations/passwordValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'localization';
import MainButton from 'components/common/MainButton';

const FIELDS = {
  currentPassword: 'currentPassword',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
};

const PasswordForm = ({ onSubmit, setShowPasswordModal }) => {
  const dispatch = useDispatch();

  const { error, status } = useStatus(changePassword);

  const validator = useValidation(passwordValidations);

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
    if (status === SUCCESS) {
      setShowPasswordModal(false);
      dispatch(changePassword.reset());
    }
  }, [status, dispatch, setShowPasswordModal]);

  const isLoading = status === LOADING;

  return (
    <>
      <Input
        label={strings.PASSWORD.currentPassword}
        testID="current-password-input"
        secureTextEntry
        editable={!isLoading}
        {...inputProps(FIELDS.currentPassword)}
      />
      <Input
        label={strings.PASSWORD.password}
        testID="password-input"
        secureTextEntry
        editable={!isLoading}
        {...inputProps(FIELDS.password)}
      />
      <Input
        label={strings.PASSWORD.passwordConfirmation}
        testID="password-confirmation-input"
        secureTextEntry
        editable={!isLoading}
        {...inputProps(FIELDS.passwordConfirmation)}
      />
      <ErrorView errors={{ error }} />
      <MainButton
        testID="password-submit-button"
        onPress={handleSubmit}
        disabled={formHasErrors || isLoading}
        text={isLoading ? strings.COMMON.loading : strings.PASSWORD.button}
      />
      <MainButton
        testID="passwod-cancel-button"
        onPress={() => setShowPasswordModal(false)}
        disabled={isLoading}
        text={strings.PASSWORD.cancel}
      />
    </>
  );
};

PasswordForm.propTypes = {
  onSubmit: func.isRequired,
  setShowPasswordModal: func,
};

export default PasswordForm;
