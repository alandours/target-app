export default {
  COMMON: {
    loading: 'Loading',
    somethingWentWrong: 'Something Went Wrong',
  },

  SIGN_IN: {
    title: 'Sign in',
    email: 'Email',
    password: 'Password',
    button: 'Sign in',
    facebookSignIn: 'Connect With Facebook',
    forgotPassword: 'Forgot your password?',
  },

  MAIN: {
    title: 'Target Points',
  },

  SIGN_UP: {
    title: 'Sign up',
    firstName: 'Name',
    email: 'Email',
    password: 'Password',
    passwordPlaceholder: 'MIN. 8 CHARACTERS LONG',
    passwordConfirmation: 'Confirm Password',
    gender: 'Gender',
    button: 'Sign up',
  },

  GENDER: {
    placeholder: { label: 'SELECT YOUR GENDER', value: '' },
    items: [
      { label: 'MALE', value: 'male' },
      { label: 'FEMALE', value: 'female' },
      { label: 'OTHER', value: 'other' },
    ],
  },

  VALIDATIONS: {
    firstName: {
      presence: '^you forgot to put your name!',
    },
    email: {
      format: '^oops! this email is not valid',
    },
    password: {
      length: '^the password must be 8 characters long',
    },
    passwordConfirmation: {
      equality: "^passwords don't match",
    },
    gender: {
      presence: 'You forgot to select your gender!',
    },
  },

  TARGET: {
    create: 'Create new target',
  },

  PROFILE: {
    logout: 'Log out',
  },
};
