import Promise from 'promise';
import * as api from './api';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getToken = () => localStorage.getItem('token');

export const getUser = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
};


export const isLoggedIn = () => {
  return getToken();
};

export const login = (user) => {
  return new Promise((resolve, reject) => {
    if (isLoggedIn()) {
      resolve(getUser());
    }

    return api.post('user/login', user).then((response) => {
      if (response && response.data && response.data.jwtToken) {
        setToken(response.data.jwtToken);
        setUser(response.data);
        resolve(response.data);
      }
    }).catch((error) => {
      reject(error);
    });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};
