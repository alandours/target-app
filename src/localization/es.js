export default {
  COMMON: {
    loading: 'Cargando',
    somethingWentWrong: 'Algo salió mal',
  },

  SIGN_IN: {
    title: 'Iniciar sesión',
    email: 'Email',
    password: 'Contraseña',
    button: 'Iniciar sesión',
    facebookSignIn: 'Conectar con Facebook',
    forgotPassword: 'Olvidó su contraseña?',
  },

  MAIN: {
    title: 'Target Points',
  },

  SIGN_UP: {
    title: 'Registro',
    firstName: 'Nombre',
    email: 'Email',
    password: 'Contraseña',
    passwordPlaceholder: 'MIN. 8 CARACTERES',
    passwordConfirmation: 'Repetir contraseña',
    gender: 'Género',
    button: 'Iniciar sesión',
  },

  GENDER: {
    placeholder: { label: 'SELECCIONA TU GÉNERO', value: '' },
    items: [
      { label: 'MASCULINO', value: 'male' },
      { label: 'FEMENINO', value: 'female' },
      { label: 'OTRO', value: 'other' },
    ],
  },

  VALIDATIONS: {
    firstName: {
      presence: '^olvidaste poner el nombre!',
    },
    email: {
      format: '^oops! el email no es valido',
    },
    password: {
      length: '^la contraseña tiene que tener por lo menos 8 caracteres',
    },
    passwordConfirmation: {
      equality: '^las contraseñas no coinciden',
    },
    gender: {
      presence: 'Olvidaste seleccionar tu género!',
    },
    radius: {
      presence: '^El area no puede estar vacia',
      numericality: '^El area tiene que ser un número',
    },
    targetTitle: {
      presence: '^El título no puede estar vacio',
    },
    topic: {
      presence: '^El tema no puede estar vacio',
    },
  },

  TARGET: {
    create: 'Crear nuevo target',
    radius: 'Especifica un área',
    title: 'Título del target',
    titlePlaceholder: 'Elige un título para tu target',
    topics: 'Selecciona un tema',
    topicsPlaceholder: 'Sobre que quieres hablar?',
    save: 'Guardar target',
    length: 'No puedes crear más de 10 targets',
  },
};
