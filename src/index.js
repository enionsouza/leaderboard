import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import GameScores from './game-scores';
import { gameID as id } from './create-new-game';

id.then((res) => {
  const regexp = /(Game with ID: )|( added.)/g;
  const gameID = localStorage.gameID || res.replace(regexp, '');
  if (!localStorage.gameID) localStorage.gameID = gameID;

  const game = new GameScores(gameID);
  const refreshBtn = document.querySelector('button');
  const submitBtn = document.querySelector('input[type="submit"]');

  const renderTable = async () => {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    const scores = await game.scores;
    scores.forEach((row) => {
      tbody.innerHTML += `
                <tr>
                  <td>${row.user}</td>
                  <td>${row.score}</td>
                </tr>
      `;
    });
  };

  const submitNewScore = async (e) => {
    e.preventDefault();
    const user = document.getElementById('username');
    const score = document.getElementById('score');
    if (user.value && score.value) game.submitScore(user.value, score.value);
    user.value = '';
    score.value = '';
    renderTable();
  };

  refreshBtn.onclick = renderTable;
  submitBtn.onclick = submitNewScore;
  window.onload = renderTable;
});
