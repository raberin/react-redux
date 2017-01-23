import * as auth from '../utils/auth';
import { browserHistory } from 'react-router';

export const loginSuccess = (user) => {
  return { type: 'LOGIN_SUCCESS', token: user.jwtToken, user };
};

const loginFail = error => {
  return { type: 'LOGIN_FAILED', error };
};

const logoutSuccess = () => {
  return { type: 'LOGOUT_SUCCESS' };
};

export const login = (credentials) => {
  return (dispatch) => {
    return auth.login(credentials).then((user) => {
      dispatch(loginSuccess(user));
      browserHistory.push('/profile');
    }).catch((error) => {
      dispatch(loginFail(error));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return auth.logout().then(() => {
      browserHistory.push('/login');
      dispatch(logoutSuccess());
    }).catch(() => {
      // dispatch(logout(error));
    });
  };
};
