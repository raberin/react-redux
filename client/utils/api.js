import axios from 'axios';
import * as auth from './auth';

import config from '../../server/config';
/**
* TODO: Apply Axios defaults to every request
* https://github.com/mzabriskie/axios#global-axios-defaults

*/

const apiUrl = config.apiUrl;

const authHeaders = () => {
  return {
    Authorization: auth.getToken() !== null ? `Bearer ${auth.getToken()}` : null,
  };
};

export const get = (endpoint) => {
  return axios({
    url: apiUrl + endpoint,
    method: 'get',
    headers: authHeaders(),
  });
};

export const post = (endpoint, data) => {
  return axios({
    url: apiUrl + endpoint,
    method: 'post',
    headers: authHeaders(),
    responseType: 'json',
    data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
