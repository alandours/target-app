import { createThunk, createAction } from '@rootstrap/redux-tools';
import userService from 'services/userService';
import parseError from 'utils/parseError';

export const login = createThunk('LOGIN', async user => {
  try {
    const { data } = await userService.login({ user });
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const logout = createThunk('LOGOUT', async () => {
  try {
    await userService.logout();
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const signUp = createThunk('SIGNUP', async user => {
  try {
    const { data } = await userService.signUp({ user });
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const getProfile = createThunk('GET_PROFILE', async user => {
  try {
    const { data } = await userService.getProfile(user);
    return data.user;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const updateProfile = createThunk('UPDATE_PROFILE', async user => {
  try {
    const { data } = await userService.updateProfile(user);
    return data.user;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const changePassword = createThunk('CHANGE_PASSWORD', async passwordData => {
  try {
    const { data } = await userService.changePassword(passwordData);
    return data;
  } catch ({ response }) {
    throw parseError(response);
  }
});

export const updateSession = createAction('UPDATE_SESSION');

export const { success: loginSuccess } = login;
export const { success: signUpSuccess } = signUp;
export const { success: logoutSuccess } = logout;
export const { success: getProfileSuccess } = getProfile;
export const { success: updateProfileSuccess } = updateProfile;
export const { success: changePasswordSuccess } = changePassword;
