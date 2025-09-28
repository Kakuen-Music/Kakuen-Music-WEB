function toggleTracklist(id) {
  const tracklist = document.getElementById(id);
  if (tracklist) {
    tracklist.classList.toggle("open");
  }
}

function setLanguage(lang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => btn.classList.remove('active'));

  if(lang === 'pl') langButtons[0].classList.add('active');
  else langButtons[1].classList.add('active');

  const allContents = document.querySelectorAll('.lang-content');
  allContents.forEach(el => el.classList.remove('active'));

  const activeContents = document.querySelectorAll(`.lang-content.${lang}`);
  activeContents.forEach(el => el.classList.add('active'));
}

// Domyślny język przy starcie strony
document.addEventListener("DOMContentLoaded", function() {
  setLanguage('pl');
});
