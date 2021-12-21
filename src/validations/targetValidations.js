import strings from 'localization';

const { VALIDATIONS } = strings;

export default {
  radius: {
    presence: { message: VALIDATIONS.radius.presence },
    numericality: {
      message: VALIDATIONS.radius.numericality,
      onlyInteger: true,
      greaterThan: 0,
    },
  },
  title: {
    presence: { message: VALIDATIONS.targetTitle.presence },
  },
  topic_id: {
    presence: { message: VALIDATIONS.topic.presence },
    numericality: {
      onlyInteger: true,
    },
  },
};
