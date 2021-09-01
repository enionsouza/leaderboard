import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const tableSeed = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 20,
  },
  {
    name: 'Name',
    score: 50,
  },
  {
    name: 'Name',
    score: 78,
  },
  {
    name: 'Name',
    score: 125,
  },
  {
    name: 'Name',
    score: 77,
  },
  {
    name: 'Name',
    score: 42,
  },
];

function renderTable() {
  const tbody = document.querySelector('tbody');
  tableSeed.forEach((row) => {
    tbody.innerHTML += `
              <tr>
                <td>${row.name}</td>
                <td>${row.score}</td>
              </tr>
    `;
  });
}

renderTable();
