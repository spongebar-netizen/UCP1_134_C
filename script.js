// script.js
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      alert("🎌 Promo Kursus Jepang! Dapatkan diskon 100% untuk paket premium NihongoClass!");
    }, 2000);

    const audio = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
  
    let isMuted = false;
  
    muteBtn.addEventListener('click', function () {
      isMuted = !isMuted;
      audio.muted = isMuted;
      muteBtn.textContent = isMuted ? '🔇' : '🔈';
    });
});