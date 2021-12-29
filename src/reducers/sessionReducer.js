import { createReducer } from '@rootstrap/redux-tools';
import {
  loginSuccess,
  signUpSuccess,
  logoutSuccess,
  updateSession,
  getProfileSuccess,
  updateProfileSuccess,
  changePasswordSuccess,
} from 'actions/userActions';

const initialState = {
  user: null,
  info: null,
  profile: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.user = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

const handleGetProfile = (state, { payload }) => {
  state.profile = payload;
};

const handleUpdateProfile = (state, { payload }) => {
  state.profile = payload;
};

const handleChangePassword = (state, { payload }) => {
  state.profile = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
  [getProfileSuccess]: handleGetProfile,
  [updateProfileSuccess]: handleUpdateProfile,
  [changePasswordSuccess]: handleChangePassword,
});
