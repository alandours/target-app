import strings from 'localization';

const { VALIDATIONS } = strings;

export default {
  email: {
    presence: true,
    email: { message: VALIDATIONS.email.format },
  },
  username: {
    presence: true,
  },
};
