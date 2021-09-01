export default class {
  constructor(gameID) {
    this.gameID = gameID;
    this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`;
  }

  get scores() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((json) => json.result);
  }

  submitScore(user, score) {
    fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => json.result);
  }
}
