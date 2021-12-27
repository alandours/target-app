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
    radius: {
      presence: "^Area can't be empty",
      numericality: '^Area needs to be a number',
    },
    targetTitle: {
      presence: "can't be empty",
    },
    topic: {
      presence: "can't be empty",
    },
  },

  TARGET: {
    create: 'Create new target',
    radius: 'Specify area length',
    title: 'Target title',
    titlePlaceholder: 'Choose a title for your target',
    topics: 'Select a topic',
    topicsPlaceholder: 'What do you want to talk about?',
    save: 'Save target',
    length: "You can't create more than 10 targets",
    delete: 'Delete',
    deleteTitle: 'Sure you want to delete this target?',
    deleteSubtitle:
      "Remember that if you delete it, you won't be able to chat with its matches anymore",
    deleteCancel: 'Cancel',
    edit: 'Save',
  },
};
