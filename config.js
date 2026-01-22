/* ================= DATA ================= */
const DATA = {
  pria: "Ahmad Fauzi",
  wanita: "Siti Aisyah",
  tanggal: "Minggu, 30 Januari 2026",
  waktu: "10.00 WIB - Selesai",
  tempat: "TCU CELL",
  alamat: "Jl. Contoh No. 123, Kota CIHAMPELAS",
  maps: "https://maps.app.goo.gl/i3q8aiDBWSGvG7c2A",
  galeri: [
    "assets/img/gallery/01.jpg",
    "assets/img/gallery/02.jpg",
    "assets/img/gallery/03.jpg",
    "assets/img/gallery/04.jpg",
    "assets/img/gallery/05.jpg",
    "assets/img/gallery/06.jpg"
  ],
  countdown: "2026-01-30T10:00:00"
};

/* ================= INIT ================= */
const $ = id => document.getElementById(id);

$('namaPasangan').innerText = `${DATA.pria} & ${DATA.wanita}`;
$('tanggal').innerText = DATA.tanggal;
$('waktu').innerText = DATA.waktu;
$('tempat').innerText = DATA.tempat;
$('alamat').innerText = DATA.alamat;
$('maps').href = DATA.maps;

/* Nama tamu */
const q = new URLSearchParams(location.search);
if (q.get('to')) {
  $('namaTamu').innerText = 'Kepada Yth. ' + decodeURIComponent(q.get('to'));
}

/* Musik */
document.addEventListener('DOMContentLoaded', () => {

  const music = document.getElementById('bgMusic');
  const playBtn = document.getElementById('playMusic');

  if (!music || !playBtn) {
    console.error('Audio / tombol tidak ditemukan');
    return;
  }

  playBtn.addEventListener('click', () => {
    music.currentTime = 0;

    music.play()
      .then(() => {
        playBtn.style.display = 'none';
      })
      .catch(err => {
        console.log('Gagal play:', err);
        alert('Tap sekali lagi untuk memutar musik');
      });
  });

});


/* Galeri */
const gal = $('galeri');
DATA.galeri.forEach((src, i) => {
  const img = document.createElement('img');
  img.src = src;
  if (i === 0) img.classList.add('active');
  gal.appendChild(img);
});
let idx = 0;
setInterval(() => {
  const imgs = gal.querySelectorAll('img');
  imgs[idx].classList.remove('active');
  idx = (idx + 1) % imgs.length;
  imgs[idx].classList.add('active');
}, 3500);

/* Countdown */
const target = new Date(DATA.countdown).getTime();
setInterval(() => {
  const diff = target - Date.now();
  if (diff <= 0) return;
  $('d').innerText = Math.floor(diff / 86400000);
  $('h').innerText = Math.floor(diff / 3600000) % 24;
  $('m').innerText = Math.floor(diff / 60000) % 60;
  $('s').innerText = Math.floor(diff / 1000) % 60;
}, 1000);

