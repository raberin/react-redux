const initialState = {
  loggedIn: false,
  token: null,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        user: action.user,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};
