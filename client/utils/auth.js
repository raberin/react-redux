import Promise from 'promise';
import * as api from './api';

const getToken = () => !!localStorage.getItem('token');

export const isLoggedIn = () => {
  return getToken();
};

export const login = (user) => {
  return new Promise((resolve, reject) => {
    if (this.isLoggedIn()) {
      resolve(this.getToken());
    }

    api.post('user/login', user).then((response) => {
      if (response && response.jwtToken) {
        localStorage.setItem('token', response.jwtToken);
        resolve(response);
      }
    }).catch((error) => {
      reject(error);
    });
  });
};
