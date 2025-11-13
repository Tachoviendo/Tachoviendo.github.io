// Todas las temáticas del juego
const topics = [
    "Tipos de estudiantes ",
    "Excusas para no entregar un trabajo",
    "Cosas que hay en una mochila universitaria",
    "Cosas que se hacen en los recreos",
    "Tipos de profesores",
    "Cosas que estresan en época de parciales",
    "Comidas o snacks universitarios",
    "Formas de celebrar cuando termina el semestre",
    "Formas de ahorrar siendo estudiante",
    "Lugares del campus",
    "Conceptos que escuchás pero no entendés del todo",
    "Cosas que diría un profe exigente",
    "Frases para pedirle los apuntes a alguien",
];

// Variable para controlar el estado de la carta
let isFlipped = false;
let isAnimating = false;

// Elementos del DOM
const card = document.getElementById('card');
const topicText = document.getElementById('topicText');

// Función para obtener una temática aleatoria
function getRandomTopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
}

// Función para voltear la carta
function flipCard() {
    if (isAnimating) return; // Prevenir clicks durante animación
    
    if (isFlipped) {
        // Si ya está volteada, animación de volver al mazo
        isAnimating = true;
        card.classList.add('to-deck');
        
        setTimeout(() => {
            card.classList.remove('flipped');
            card.classList.remove('to-deck');
            isFlipped = false;
            isAnimating = false;
        }, 600);
    } else {
        // Si está de frente, la volteamos y mostramos nueva temática
        const topic = getRandomTopic();
        topicText.textContent = topic;
        card.classList.add('flipped');
        isFlipped = true;
    }
}

// Event listeners
card.addEventListener('click', flipCard);

// Detectar tecla espacio
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevenir scroll de la página
        flipCard();
    }
});
