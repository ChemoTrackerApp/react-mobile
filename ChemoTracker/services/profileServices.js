const api = 'http://ec2-52-15-106-40.us-east-2.compute.amazonaws.com:8000';
const header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const getProfile = () => {
  return fetch(`${api}/users/profile/`, {
    method: 'get',
    headers: header
  }).then(res => {return res.json()});
};

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

export const postProfile = (data) => {
  return fetch(`${api}/rest-auth/login/`, {
    method: 'post',
    headers: header,
    body: data
  }).then(res => {
    return res.json()});
}
