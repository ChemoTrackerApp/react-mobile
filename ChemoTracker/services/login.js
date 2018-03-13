
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
