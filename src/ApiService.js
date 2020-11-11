const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}`;

function getMazeOutput (instructions) {
  return fetchRequest('/instructions', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(instructions)
  })
}

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
    .then(res => res.status < 400 ? res.text() : Promise.reject(res))
    .catch((err) => {
      console.log('Error:', err) //eslint-disable-line no-console
    })
};

export default {
  getMazeOutput,
};