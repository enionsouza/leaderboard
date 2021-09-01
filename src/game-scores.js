export default class {
  constructor(gameID) {
    this.gameID = gameID;
  }

  get scores() {
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`;
    return fetch(url)
      .then((res) => res.json())
      .then((json) => json.result);
  }
}
