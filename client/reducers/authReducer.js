const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        user: action.user,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggedIn: false,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: {},
      };
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        user: action.user,
      };
    case 'UPDATE_PROFILE_FAIL':
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
