
import { api, header } from './common.js';

export const login = (emailInput, passwordInput) => {
  return fetch(`${api}/rest-auth/login/`, {
    method: 'post',
    headers: header,
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput
    })
  }).then(res => {
    return res.json()
  })
}

export const register = (emailInput, passwordInput1, passwordInput2) => {
  return fetch(`${api}/rest-auth/registration/`, {
    method: 'post',
    headers: header,
    body: JSON.stringify({
      email: emailInput,
      password1: passwordInput1,
      password2: passwordInput2
    })
  }).then(res => {
    return res.json()
  })
}
