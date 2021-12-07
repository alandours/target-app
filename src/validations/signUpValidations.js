import strings from 'localization';

const { VALIDATIONS } = strings;

export default {
  firstName: {
    presence: { message: VALIDATIONS.firstName.presence },
  },
  email: {
    presence: true,
    email: { message: VALIDATIONS.email.email },
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
    equality: { attribute: 'password', message: VALIDATIONS.passwordConfirmation.equality },
  },
  gender: {
    presence: { message: VALIDATIONS.gender.presence },
    inclusion: ['male', 'female', 'other'],
  },
};
