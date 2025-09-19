// Funkcja do rozwijania/zamykania tracklist
function toggleTracklist(id) {
    const tracklist = document.getElementById(id);
    tracklist.classList.toggle("open");
}

// Obsługa przycisku ciemnego motywu
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
