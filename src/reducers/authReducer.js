const initialState = {
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        profile: action.response
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        me: null,
        users: null
      };

    default:
      return state;
  }
};