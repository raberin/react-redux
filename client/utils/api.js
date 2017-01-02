import axios from 'axios';

import config from '../../server/config';

const apiUrl = config.apiUrl;

export function get(endpoint, params) {};

export function post(endpoint, data) {
  return axios({
    url: apiUrl + endpoint,
    method: 'post',
    responseType: 'json',
    data: data
  })
    .then(function(response) {
      return response
    })
    .catch(function(error){
      return error
    })

};
