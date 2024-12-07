// Funktion zum Umschalten der Antwort auf eine Frage
function toggleAnswer(id) {
    const answer = document.querySelector(`#${id}`);
    answer.classList.toggle('show'); // Umschalten der Klasse 'show'
}