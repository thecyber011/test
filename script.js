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
    }
];

function renderGames(arr) {
    const list = document.getElementById('gameList');
    list.innerHTML = arr.map(game => `
        <div class="game-card" onclick="openGame('${game.url}', '${game.title}')">
            <div class="game-thumb" style="background-image: url('${game.thumb}')"></div>
            <div class="game-info">
                <span style="color:var(--accent); font-size: 12px;">${game.category.toUpperCase()}</span>
                <h3>${game.title}</h3>
            </div>
        </div>
    `).join('');
}

// Menu Mobile Toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

function openGame(url, title) {
    if(url === "#") return alert("Aguarde o lançamento!");
    const frame = document.getElementById("gameFrame");
    frame.src = url;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("gameModal").style.display = "block";
}

function closeGame() {
    document.getElementById("gameModal").style.display = "none";
    document.getElementById("gameFrame").src = "";
}

function filterGames(cat) {
    const filtered = cat === 'todos' ? myGames : myGames.filter(g => g.category === cat);
    renderGames(filtered);
    document.querySelector('.nav-links').classList.remove('active');
}

window.onload = () => {
    document.querySelector('.progress-fill').style.width = "100%";
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        renderGames(myGames);
    }, 2000);
};
