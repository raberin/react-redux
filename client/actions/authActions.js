import auth from '../utils/auth';

function loggedIn(token) {
  return {
    type: 'LOGGED_IN',
    token,
  };
}

function loginFail(error) {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
}

export const login = (user) => {
  return (dispatch) => {
    auth.login(user)
      .then((response) => {
        dispatch(loggedIn(response));
      })
      .catch((error) => {
        dispatch(loginFail(error));
      });
  };
};
