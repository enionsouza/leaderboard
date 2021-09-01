/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

async function getGameID() {
  const gameID = localStorage.gameID
  || await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Video Game!',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => json.result);
  return gameID;
}

export const gameID = getGameID();
