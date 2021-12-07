import React from 'react';
import { func } from 'prop-types';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { signUp } from 'actions/userActions';
import Input from 'components/common/Input';
import strings from 'localization';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import useTextInputProps from 'hooks/useTextInputProps';
import signUpValidations from 'validations/signUpValidations';
import ErrorView from 'components/common/ErrorView';
import MainButton from 'components/common/MainButton';
import Picker from 'components/common/Picker';

const FIELDS = {
  firstName: 'firstName',
  email: 'email',
  password: 'password',
  passwordConfirmation: 'passwordConfirmation',
  gender: 'gender',
};

const SignUpForm = ({ onSubmit }) => {
  const { error, status } = useStatus(signUp);
  const validator = useValidation(signUpValidations);
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

  return (
    <>
      <Input
        label={strings.SIGN_UP.firstName}
        testID="name-input"
        disabled={status === LOADING}
        {...inputProps(FIELDS.firstName)}
      />
      <Input
        label={strings.SIGN_UP.email}
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        disabled={status === LOADING}
        {...inputProps(FIELDS.email)}
      />
      <Input
        label={strings.SIGN_UP.password}
        secureTextEntry
        testID="password-input"
        placeholder={strings.SIGN_UP.passwordPlaceholder}
        disabled={status === LOADING}
        {...inputProps(FIELDS.password)}
      />
      <Input
        label={strings.SIGN_UP.passwordConfirmation}
        secureTextEntry
        testID="confirm-password-input"
        disabled={status === LOADING}
        {...inputProps(FIELDS.passwordConfirmation)}
      />
      <Picker
        label={strings.SIGN_UP.gender}
        placeholder={strings.GENDER.placeholder}
        testID="gender-picker"
        items={strings.GENDER.items}
        onValueChange={inputProps(FIELDS.gender).onChangeText}
        disabled={status === LOADING}
        {...inputProps(FIELDS.gender)}
      />
      <ErrorView errors={{ error }} />
      <MainButton
        testID="signup-submit-button"
        onPress={handleSubmit}
        disabled={formHasErrors}
        text={status === LOADING ? strings.COMMON.loading : strings.SIGN_UP.button}
      />
    </>
  );
};

SignUpForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SignUpForm;
