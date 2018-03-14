import { api, header } from './common.js';

export const getSymptoms = () => {
  return fetch(`${api}/symptom-tracker/symptoms`, {
    method: 'get',
    headers: header
  }).then(res => {return res.json()});
};

export const getSymptomsByMonth = (y, m, token) => {
  const queryparams = `year=${y}&month=${m}`;
  return fetch(`${api}/symptom-tracker/patientsymptoms/?${queryparams}`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }).then(res => {
    return res.json();
  });
}

export const getFilePath = (name) => {
  switch(name) {
    case 'fatigue': return require('../res/fatigue_icon.png');
    case 'nausea': return require('../res/nausea_icon.png');
    case 'diarrhea': return require('../res/diarrhea_icon.png');
    case 'vomiting': return require('../res/vomiting_icon.png');
  }
}


export const getStreak = (token) => {
  return fetch(`${api}/symptom-tracker/streak/`, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  }).then(res => {
    return res.json();
  });
}
