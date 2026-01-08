
const birthdayDate = new Date(2026, 0, 29, 0, 0, 0);

const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date();
    const diff = birthdayDate - now;

    if (diff <= 0) {
       
        audioPlayer.pause();
        
        
        document.getElementById("countdown-screen").classList.add("hidden");
        
        //Mostrar pantalla de cumpleaños
        document.getElementById("birthday-screen").classList.remove("hidden");
        
        //Reproducir canción de cumpleaños
        const birthdayAudio = document.getElementById("birthday-audio");
        birthdayAudio.play().catch(error => {
            console.log("Reproducción automática bloqueada por el navegador:", error);
        });
        
        return;
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}

//----- Canciones -----

const songs = [
    { name: "Beret & Morat - Porfa no te vayas", file: "music/Beret & Morat - Porfa no te vayas.mp3" },
    { name: "Andrés Cepeda & Morat - Bien", file: "music/Morat - Bien.mp3" },
    { name: "Morat - Cuarto De Hotel", file: "music/Morat - Cuarto De Hotel.mp3" },
    { name: "Morat - Debi Suponerlo", file: "music/Morat - Debi Suponerlo.mp3" },
    { name: "Morat - No Se Va", file: "music/Morat - No Se Va.mp3" },
    { name: "Morat - Tarde", file: "music/Morat - Tarde.mp3" },
    { name: "Morat, Feid - Salir Con Vida", file: "music/Morat, Feid - Salir Con Vida.mp3" }
];

let currentSong = 0;

const audioPlayer = document.getElementById("audio-player");
const songNameEl = document.getElementById("song-name");
const nextBtn = document.getElementById("next-song");
const prevBtn = document.getElementById("prev-song");

// Cargar canción
function loadSong(index) {
    audioPlayer.src = songs[index].file;
    songNameEl.textContent = "🎵 " + songs[index].name;
    audioPlayer.play();
}

// Siguiente canción
nextBtn.addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
});

// Canción anterior
prevBtn.addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
});

// Iniciar automáticamente la primera canción
loadSong(currentSong);

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();


const photoCards = document.querySelectorAll('.photo-card');

photoCards.forEach(card => {
    card.addEventListener('click', function() {
        
        this.classList.toggle('flipped');
    });
});