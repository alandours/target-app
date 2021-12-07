import strings from 'localization';

const { VALIDATIONS } = strings;

export default {
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
};
