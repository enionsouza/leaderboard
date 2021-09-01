import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import GameScores from './game-scores';
import { gameID as id } from './create-new-game';

let gameID;

id.then((res) => {
  const regexp = /(Game with ID: )|( added.)/g;
  gameID = localStorage.gameID || res.replace(regexp, '');
  if (!localStorage.gameID) localStorage.gameID = gameID;

  const game = new GameScores(gameID);
  const refreshBtn = document.querySelector('button');

  async function renderTable() {
    const tbody = document.querySelector('tbody');
    const scores = await game.scores;
    tbody.innerHTML = '';
    scores.forEach((row) => {
      tbody.innerHTML += `
                <tr>
                  <td>${row.user}</td>
                  <td>${row.score}</td>
                </tr>
      `;
    });
  }

  refreshBtn.onclick = renderTable;
  window.onload = renderTable;
});
