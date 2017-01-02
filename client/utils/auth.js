import Promise from 'promise';
import * as api from './api';

const getToken = () => !!localStorage.getItem('token');

export const isLoggedIn = () => {
  return !!this.getToken();
};

export const login = (user) => {
  return new Promise((resolve, reject) => {
      if(this.isLoggedIn()) {
        return resolve(this.getToken());
      }

      api.post('user/login')
        .then((response) => {
          if(response && response.jwtToken) {
            localStorage.setItem('token', response.jwtToken)
            return resolve(response);
          }
        })
        .catch((error) => {
          return reject(error);
        });

  });
};
