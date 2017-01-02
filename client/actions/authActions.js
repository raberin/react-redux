import auth from '../utils/auth';

function loggedIn(token) {
  return {
    type: 'LOGGED_IN',
    token : token
  };
}

function loginFail(error) {
  return {
    type: 'LOGIN_FAILED',
    error : error
  };
}

export function login(user) {
  return function(dispatch) {
    auth.login(user)
      .then((response) => {
        console.log(response);
        dispatch(loggedIn(response))
      })
      .catch((error) => {
        dispatch(loginFail(error))
      })
  }
}
