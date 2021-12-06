import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, TouchableOpacity, Text } from 'react-native';
import { object } from 'prop-types';

import Header from 'components/common/Header';
import LoginForm from 'components/LoginForm';
import SignButton from 'components/SignButton';

import { login } from 'actions/userActions';
import strings from 'localization';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Header />
      <LoginForm onSubmit={loginRequest} />
      <TouchableOpacity testID="forgot-password-button">
        <Text style={styles.forgotPasswordButton}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="facebook-login-button">
        <Text style={styles.facebookLoginButton}>Connect With Facebook</Text>
      </TouchableOpacity>
      <SignButton testID="sign-up-button" onPress={handleLogin} text={strings.SIGN_UP.title} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOptions = {
  title: strings.SIGN_IN.title,
};

export default memo(LoginScreen);
