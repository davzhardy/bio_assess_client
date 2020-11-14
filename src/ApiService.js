const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;

function getMazeOutput (instructions) {
  return fetchRequest(`/instructions/${instructions}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res.json() : Promise.reject(res))
    .catch((err) => {
      console.log('Error:', err) //eslint-disable-line no-console
    })
};

export default {
  getMazeOutput,
};