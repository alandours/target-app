import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native';

import { logout, getProfile, updateProfile } from 'actions/userActions';
import strings from 'localization';
import ProfileForm from 'components/ProfileForm';

import profileBackground from 'assets/images/profile-background.png';
import profilePicture from 'assets/images/profile-picture.png';

import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ session: { user } }) => user);
  const getProfileRequest = useCallback(user => dispatch(getProfile(user)), [dispatch]);
  const updateProfileRequest = useCallback(data => dispatch(updateProfile(data)), [dispatch]);
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  useEffect(() => {
    getProfileRequest(user);
  }, [getProfileRequest, user]);

  return (
    <SafeAreaView style={styles.profile}>
      <View style={styles.profileImages}>
        <Image source={profileBackground} style={styles.profileBackground} />
        <Image source={profilePicture} style={styles.profilePicture} />
      </View>
      <ProfileForm onSubmit={updateProfileRequest} />
      <TouchableOpacity onPress={logoutRequest} style={styles.logoutButton}>
        <Text style={styles.logout}>{strings.PROFILE.logout}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
