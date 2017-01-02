import axios from 'axios';

import config from '../../server/config';

const apiUrl = config.apiUrl;

// export function get(endpoint, params) {};

export const post = (endpoint, data) => {
  return axios({
    url: apiUrl + endpoint,
    method: 'post',
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
