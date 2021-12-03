import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

import SignUpForm from 'components/SignUpForm';
import Header from 'components/common/Header';
import SignButton from 'components/SignButton';
import { SIGN_UP_SCREEN } from 'constants/screens';
import { signUp } from 'actions/userActions';
import strings from 'localization';
import styles from './styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);

  return (
    <View style={styles.container} testID={SIGN_UP_SCREEN}>
      <Header />
      <SignUpForm onSubmit={signUpRequest} />
      <SignButton
        testID="sign-in-button"
        onPress={() => navigation.goBack()}
        text={strings.SIGN_IN.title}
      />
    </View>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.navigationOptions = {
  title: strings.SIGN_UP.title,
};

export default SignUpScreen;
