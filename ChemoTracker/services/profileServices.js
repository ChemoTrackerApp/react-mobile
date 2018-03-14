import { api, header } from './common.js';

export const getProfile = (token) => {
  return fetch(`${api}/users/profile/`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }).then(res => {return res.json()});
};

export const getAccessKey = (token) => {
  return fetch(`${api}/users/s3-info/`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }).then(res => {return res.json()});
}

export const login = () => {
  return fetch(`${api}/rest-auth/login/`, {
    method: 'post',
    headers: header,
    body: JSON.stringify({
      email: "seven@seven.com",
      password: "mustaqeem"
    })
  }).then(res => {
    return res.json()});
}

export const postProfile = (data, token) => {
  console.log(data);
  return fetch(`${api}/users/profile/`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => {
    return res.json()});
}
