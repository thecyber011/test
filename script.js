// BANCO DE DADOS DOS JOGOS
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
        title: "Neon Racing",
        category: "acao",
        thumb: "https://img.itch.zone/aW1nLzEzOTY4NDg0LnBuZw==/315x250%23c/T5Xw%2Bc.png",
        url: "#"
    }
];

const gameList = document.getElementById('gameList');

// Função para renderizar os jogos na tela
function displayGames(gamesArray) {
    gameList.innerHTML = "";
    gamesArray.forEach(game => {
        gameList.innerHTML += `
            <div class="game-card" onclick="openGame('${game.url}', '${game.title}')">
                <div class="game-thumb" style="background-image: url('${game.thumb}')"></div>
                <div class="game-info">
                    <span class="tag">${game.category.toUpperCase()}</span>
                    <h3 style="margin-top:10px">${game.title}</h3>
                </div>
            </div>
        `;
    });
}

// Filtro de Categorias
function filterGames(category) {
    if(category === 'todos') {
        displayGames(myGames);
    } else {
        const filtered = myGames.filter(g => g.category === category);
        displayGames(filtered);
    }
}

// Sistema de Busca
function searchGames() {
    const term = document.getElementById('gameSearch').value.toLowerCase();
    const filtered = myGames.filter(g => g.title.toLowerCase().includes(term));
    displayGames(filtered);
}

// Controle do Modal
const modal = document.getElementById("gameModal");
const frame = document.getElementById("gameFrame");
const mTitle = document.getElementById("modalTitle");

function openGame(url, title) {
    if(url === "#") {
        alert("Este jogo de exemplo ainda não tem uma URL!");
        return;
    }
    frame.src = url;
    mTitle.innerText = title;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeGame() {
    modal.style.display = "none";
    frame.src = "";
    document.body.style.overflow = "auto";
}

// Tela de Carregamento
window.addEventListener('load', () => {
    const fill = document.querySelector('.progress-fill');
    fill.style.width = "100%";
    
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
        displayGames(myGames);
    }, 2000);
});

// Fechar modal ao clicar fora
window.onclick = function(event) {
    if (event.target == modal) closeGame();
}