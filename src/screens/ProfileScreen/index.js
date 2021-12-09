import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, Button } from 'react-native';

import { logout } from 'actions/userActions';
import strings from 'localization';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <SafeAreaView>
      <Button onPress={logoutRequest} title="Logout" />
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = {
  title: strings.MAIN.title,
};

export default ProfileScreen;
