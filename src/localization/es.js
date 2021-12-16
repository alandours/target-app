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

  MAIN_SCREEN: {
    logout: 'Cerrar sesión',
    title: 'Pagina Principal',
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
  },
};
