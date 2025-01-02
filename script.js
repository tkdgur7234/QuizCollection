const f = document.getElementById('search');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
