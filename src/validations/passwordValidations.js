import strings from 'localization';

const { VALIDATIONS } = strings;

export default {
  currentPassword: {
    presence: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: VALIDATIONS.password.length,
    },
  },
  passwordConfirmation: {
    presence: true,
    equality: {
      attribute: 'password',
      message: VALIDATIONS.passwordConfirmation.equality,
    },
  },
};
