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
      <Button onPress={logoutRequest} title={strings.PROFILE.logout} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
