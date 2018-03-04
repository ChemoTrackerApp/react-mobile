const api = 'http://ec2-52-15-106-40.us-east-2.compute.amazonaws.com:8000';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
export const getSymptoms = () => {
  return fetch(`${api}/symptom-tracker/symptoms`, {
    method: 'get',
    headers: headers
  }).then(res => {return res.json()});
};

// export const getSymptomsByDate = (y, m, d) => {
//   const queryparams = `year=${y}&month=${m}&day=${d}`
//   return fetch(`${api}/symptom-tracker/patientsymptoms/?${queryparams}`, {
//     method: 'get',
//     headers: headers
//   }).then(res => {
//     console.log("res", res);
//     return res.json();
//   });
// }
