// BANCO DE JOGOS ATUALIZADO
const myGames = [
    {
        id: 1,
        title: "Sky Tycoon",
        category: "simulacao",
        thumb: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=500&auto=format&fit=crop",
        url: "https://skytycoon.vercel.app/"
    },
    {
        id: 2,
        title: "Pixel Adventure",
        category: "aventura",
        thumb: "https://img.itch.zone/aW1nLzExMTYxMzg0LnBuZw==/315x250%23c/4%2Ff5E5.png",
        url: "#"
    },
    {
        id: 3,
        title: "Cyber Runner",
        category: "acao",
        thumb: "https://img.itch.zone/aW1nLzEzOTY4NDg0LnBuZw==/315x250%23c/T5Xw%2Bc.png",
        url: "#"
    },
    {
        id: 4,
        title: "Logic Neon",
        category: "puzzle",
        thumb: "https://img.itch.zone/aW1nLzEyNzgxNjYwLnBuZw==/315x250%23c/0kP4o2.png",
        url: "#"
    }
];

// Carregamento Inicial
const gameList = document.getElementById('gameList');

function renderGames(arr) {
    gameList.innerHTML = arr.map(game => `
        <div class="game-card" onclick="openGame('${game.url}', '${game.title}')">
            <div class="game-thumb" style="background-image: url('${game.thumb}')"></div>
            <div class="game-info">
                <span class="tag">${game.category.toUpperCase()}</span>
                <h3 style="margin-top:10px; font-family: 'Orbitron'">${game.title}</h3>
            </div>
        </div>
    `).join('');
}

// Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Filtros
function filterGames(cat) {
    navLinks.classList.remove('active'); // Fecha menu no mobile ao filtrar
    const filtered = cat === 'todos' ? myGames : myGames.filter(g => g.category === cat);
    renderGames(filtered);
}

// Busca
function searchGames() {
    const val = event.target.value.toLowerCase();
    const filtered = myGames.filter(g => g.title.toLowerCase().includes(val));
    renderGames(filtered);
}

// Modal e Jogo
function openGame(url, title) {
    if(url === "#") return alert("Jogo em desenvolvimento!");
    document.getElementById("gameFrame").src = url;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("gameModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGame() {
    document.getElementById("gameModal").style.display = "none";
    document.getElementById("gameFrame").src = "";
    document.body.style.overflow = "auto";
}

// Tela Cheia no Iframe
function toggleFullScreen() {
    const elem = document.getElementById("gameFrame");
    if (elem.requestFullscreen) { elem.requestFullscreen(); }
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
    else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
}

// Splash Screen
window.onload = () => {
    document.querySelector('.progress-fill').style.width = "100%";
    setTimeout(() => {
        const ss = document.getElementById('loading-screen');
        ss.style.opacity = '0';
        setTimeout(() => ss.style.display = 'none', 500);
        renderGames(myGames);
    }, 2000);
};
