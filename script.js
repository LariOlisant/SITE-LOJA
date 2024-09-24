// Obtemos o elemento do carrossel e todos os itens
const carousel = document.getElementById('carouselContainer');
const items = document.querySelectorAll('.carouselItem');
const itemCount = items.length;

// Calculamos o ângulo de rotação entre os itens
const angle = 360 / itemCount;
const radius = 300; // Distância do item ao centro do carrossel

// Posicionamos os itens em um círculo
items.forEach((item, index) => {
    const itemAngle = angle * index;
    item.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius}px)`;
});

// Adicionamos o ouvinte de eventos para o movimento do mouse
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    carousel.style.transform = `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`;
});

// Opcional: Adicionar um evento de clique para girar o carrossel (se desejar)
let currentAngle = 0;

function rotateCarousel(degrees) {
    currentAngle += degrees;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
}

