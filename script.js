// Nomor WhatsApp Admin Resmi Aligatour
const waAdminNumber = "628563532918";

// Data Opsi Pilihan Paket Trip Resmi Aligatour
const tripData = {
  "shuttle-ranupane": {
    title: "Private Shuttle Trip (Malang - Basecamp Ranu Pane PP)",
    images: ["gallery/shuttle1.jpg", "gallery/shuttle2.jpg"],
    desc: "Transportasi shuttle fleksibel Pergi-Pulang Malang ke Basecamp Ranu Pane. Free Fasilitas: Welcome Snack & Drink, Full Powerbank, Free Wi-Fi, Insta360 X4 Air, & Dokumentasi.",
    subPackages: [
      { name: "Jimny Katana", detail: "Kapasitas 1-2 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 800.000" },
      { name: "Avanza", detail: "Kapasitas 1-4 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 1.400.000" },
      { name: "Innova", detail: "Kapasitas 1-6 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 1.600.000" },
      { name: "Fortuner", detail: "Kapasitas 1-6 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 1.600.000" },
      { name: "Jeep Hardtop", detail: "Kapasitas 1-7 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 1.600.000" },
      { name: "HiAce", detail: "Kapasitas 1-10 seats | Include: Transport, Driver, BBM, Parkir", price: "Rp 2.500.000" }
    ]
  },
  "city-tour": {
    title: "City Tour Malang - Batu (Rent Car)",
    images: ["gallery/citytour1.jpg", "gallery/citytour5.jpg", "gallery/citytour7.jpg", "gallery/citytour8.jpg"],
    desc: "Sewa mobil + driver untuk keliling Malang & Batu. Include: Mobil, Driver, BBM, Welcome Snack/Drink, Powerbank, Wi-Fi. (Exclude: Tiket, Parkir, Tol, Konsumsi Driver).",
    subPackages: [
      { name: "Ignis / Agya / Ayla", detail: "Kapasitas 1-4 seats", price: "Rp 500.000 / hari" },
      { name: "Sigra / Calya", detail: "Kapasitas 1-6 seats", price: "Rp 550.000 / hari" },
      { name: "Avanza / Xenia", detail: "Kapasitas 1-7 seats", price: "Rp 600.000 / hari" },
      { name: "All New Avanza", detail: "Kapasitas 1-7 seats", price: "Rp 650.000 / hari" },
      { name: "Yaris New", detail: "Kapasitas 1-4 seats", price: "Rp 650.000 / hari" },
      { name: "Innova Reborn / Fortuner", detail: "Kapasitas 1-7 seats", price: "Rp 850.000 / hari" },
      { name: "Innova Venturer", detail: "Kapasitas 1-5 seats", price: "Rp 900.000 / hari" },
      { name: "HiAce Commuter", detail: "Kapasitas 1-15 seats", price: "Rp 1.350.000 / hari" },
      { name: "HiAce Premio", detail: "Kapasitas 1-12 seats", price: "Rp 1.450.000 / hari" },
      { name: "HiAce Luxury", detail: "Kapasitas 1-7 seats", price: "Rp 2.500.000 / hari" },
      { name: "Alphard", detail: "Kapasitas 1-5 seats", price: "Tanya Admin (DM/WA)" }
    ]
  },
  "private-bromo": {
    title: "Private Trip Bromo",
    images: ["gallery/bromo1.jpg", "gallery/bromo2.jpg", "gallery/bromo3.jpg", "gallery/bromo4.jpg"],
    desc: "Eksplor 7 Destinasi Bromo (Sunrise, Lembah Widodaren, Pura Poten, Kawah, G. Batok, Pasir Berbisik, Savana). Mepo: Area Kota Malang. Max 5 orang/group.",
    subPackages: [
      { name: "Paket Ekonomis", detail: "Include: 7 Destinasi, Transport PP, Jeep, Tiket Masuk, Driver & BBM, Parkir, Dokumentasi, Welcome Snack/Drink, Powerbank", price: "Rp 1.800.000 / group" },
      { name: "Paket Premium", detail: "Include: Semua Fasilitas Ekonomis + Free Wi-Fi + Insta360 X4 Air + Gimbal + Handwarmer", price: "Rp 2.300.000 / group" },
      { name: "Paket Luxury", detail: "Include: Semua Fasilitas Premium + Guest House + Professional Massage (2 pax)", price: "Rp 3.000.000 / group" }
    ]
  },
  "ranu-kumbolo": {
    title: "Private Trip Ranu Kumbolo",
    images: ["gallery/rakum1.jpg", "gallery/rakum2.jpg", "gallery/rakum3.jpg"],
    desc: "Pendakian Ranu Kumbolo (Durasi: 2 Hari 1 Malam). Bebas ribet war tiket SIMAKSI.",
    subPackages: [
      { name: "Paket Ekonomis (Min. 6 pax)", detail: "Include: Transport PP Malang-Ranu Pane, Simaksi, Asuransi TNBTS, Tour Leader, Dokumentasi, Porter Team, Tenda Big Adv, Matras, Kursi/Meja Lipat, Makan 5x, Fresh Fruits, P3K, Hand Warmer, Powerbank, Wi-Fi, Insta360 X4 / Gimbal", price: "Rp 1.400.000 / orang" },
      { name: "Paket Exclusive (Min. 6 pax)", detail: "Include: Seluruh fasilitas Ekonomis dengan peningkatan kualitas menu makanan & peralatan camping yang lebih lengkap", price: "Rp 1.600.000 / orang" },
      { name: "Paket Luxury (Min. 6 pax)", detail: "Include: Seluruh fasilitas Exclusive dengan layanan penuh, kenyamanan ekstra & perlengkapan terbaik", price: "Rp 1.700.000 / orang" },
      { name: "Paket Ekonomis (Min. 4-6 Pax)", detail: "Include: Makanan Standar, 1 Fasilitas Unggulan, Hand Warmer, Alat Camping Lengkap & Simaksi", price: "Rp 2.200.000 / orang" },
      { name: "Paket Eksklusif (Min. 4-6 Pax)", detail: "Include: Daging Grill Premium, 1 Fasilitas Unggulan, Hand Warmer, Pijat Setelah Trip, Sleeping Bag, Surat Sehat, Camilan Pribadi", price: "Rp 2.500.000 / orang" },
      { name: "Paket Luxury Premium (Min. 2-4 Pax)", detail: "Include: Chef Pribadi, Semua Fasilitas Unggulan, Hand Warmer, Pijat, Sleeping Bag, Surat Sehat, Camilan, Porter Pribadi, Fotografer Pribadi, FREE Trip Tumpak Sewu", price: "Rp 2.600.000 / orang" }
    ]
  },
  "tumpak-sewu": {
    title: "Private Trip Tumpak Sewu",
    images: ["gallery/waterfall1.jpg", "gallery/waterfall2.jpg", "gallery/waterfall4.jpg"],
    desc: "Eksplorasi destinasi indah Tumpak Sewu (Panorama Tumpak Sewu, Goa Tetes, Dasar Air Terjun Tumpak, & Telaga Biru) + FREE Panorama Kapas Biru. Mepo: Area Kota Malang (Min. 3 orang).",
    subPackages: [
      { name: "Private Trip Tumpak Sewu (Min. 3 Pax)", detail: "Include: Transportasi PP Area Malang - Tumpak Sewu, Driver, BBM, Parkir, Tour Guide, Tiket Masuk, Dokumentasi Foto & Video (All File), Welcome Snack & Drink, Full Powerbank, Free Wi-Fi, Insta360 X4 Air (+350k Add-On Photographer)", price: "Rp 400.000 / orang" }
    ]
  },
  "ranu-regulo": {
    title: "Private Ranu Regulo Camping",
    images: ["gallery/regulo1.jpg", "gallery/regulo2.jpg", "gallery/regulo3.jpg", "gallery/regulo4.jpg"],
    desc: "Nikmati camping santai nan syahdu di tepi Danau Ranu Regulo.",
    subPackages: [
      { name: "Private Trip Ranu Regulo (Min. 4 Person)", detail: "Include: Tiket/Simaksi, Transport PP, Driver, BBM, Tenda (3-4 pax), Meja-Kursi Lipat, Alat Masak/Makan, Welcome Snack/Drink, Makan 2x, Buah Segar, P3K, Dokumentasi Team, Free Tripod, Gimbal, Hand Warmer. Fasilitas Unggulan: Full Powerbank, Free Wi-Fi, Camera Insta360 X4 Air, & Gimbal (Limited).", price: "Rp 400.000 / person" }
    ]
  },
  "drop-juanda": {
    title: "Private Drop Off Juanda Airport",
    images: ["gallery/juanda1.jpg", "gallery/juanda2.jpg"],
    desc: "Perjalanan antar kota Malang - Surabaya / Juanda Airport. Layanan 24 jam. Price Include: Mobil, Driver, dan BBM (Harga not include parkir dan Tol). Drop kota Batu (ada fee charge) & Penjemputan Surabaya-Malang +fee 50k.",
    subPackages: [
      { name: "Car (Agya, Ayla, Brio, Sigra, Calya, Avanza, Xenia)", detail: "For 1-6 person | Price Include: Mobil, Driver, dan BBM", price: "Rp 550.000" },
      { name: "Comfort Car (Avanza, Xenia, XPander, Yaris New, Wuling Alvez)", detail: "For 1-4 person | Price Include: Mobil, Driver, dan BBM", price: "Rp 650.000" },
      { name: "Big Car (Innova Reborn, Innova Venturer, Grand Innova)", detail: "For 1-6 person | Price Include: Mobil, Driver, dan BBM", price: "Rp 850.000" },
      { name: "Premium Car (Fortuner, Alphard, HiAce - Request by PM)", detail: "Mobil bisa request sesuai kebutuhan | Price Include: Mobil, Driver, dan BBM", price: "Kontak Bio" }
    ]
  }
};

let currentSelectedTrip = null;
let currentModalImages = [];
let modalImageIndex = 0;
let modalSliderInterval;

// 1. MEMBUKA MODAL POP-UP DETAIL PAKET
function openTripModal(tripKey) {
  const data = tripData[tripKey];
  if (!data) return;

  currentSelectedTrip = data;

  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const dateInput = document.getElementById('tripDate');
  const modalImg = document.getElementById('modalImg');

  if (modalTitle) modalTitle.innerText = data.title;
  if (modalDesc) modalDesc.innerText = data.desc;

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  currentModalImages = data.images || [];
  modalImageIndex = 0;
  if (modalImg && currentModalImages.length > 0) {
    modalImg.src = currentModalImages[modalImageIndex];
  }

  clearInterval(modalSliderInterval);
  if (currentModalImages.length > 1) {
    modalSliderInterval = setInterval(() => {
      modalImageIndex = (modalImageIndex + 1) % currentModalImages.length;
      if (modalImg) modalImg.src = currentModalImages[modalImageIndex];
    }, 3000);
  }

  renderSubPackages();

  const modal = document.getElementById('tripModal');
  if (modal) modal.style.display = 'flex';
}

// 2. GENERATE PAKET DAN DRAF PESAN WHATSAPP
function renderSubPackages() {
  if (!currentSelectedTrip) return;

  const data = currentSelectedTrip;
  const dateInput = document.getElementById('tripDate');
  const rawDate = dateInput ? dateInput.value : '';

  let formattedDate = rawDate;
  if (rawDate) {
    const dateObj = new Date(rawDate);
    formattedDate = dateObj.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  const subContainer = document.getElementById('modalSubPackages');
  if (!subContainer) return;

  subContainer.innerHTML = '';

  data.subPackages.forEach(sub => {
    const messageText = 
`Halo Admin Aligatour, saya mau booking/tanya paket trip berikut:

 *Trip:* ${data.title}
 *Paket:* ${sub.name}
 *Harga:* ${sub.price}
 *Tanggal Keberangkatan:* ${formattedDate}
 *Fasilitas:* ${sub.detail}

Mohon info ketersediaan jadwal & kuota serta prosedur pemesanannya. Terima kasih!`;

    const messageEncoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${waAdminNumber}?text=${messageEncoded}`;

    const itemHtml = `
      <div class="sub-package-item">
        <div class="sub-package-info">
          <h4>${sub.name}</h4>
          <p>${sub.detail}</p>
          <div class="sub-package-price">${sub.price}</div>
        </div>
        <a href="${waUrl}" target="_blank" class="btn-pesan-wa">
          <i class="fab fa-whatsapp"></i> Pesan Sekarang
        </a>
      </div>
    `;
    subContainer.innerHTML += itemHtml;
  });
}

function updateWaLinks() {
  renderSubPackages();
}

function closeTripModal() {
  const modal = document.getElementById('tripModal');
  if (modal) modal.style.display = 'none';
  clearInterval(modalSliderInterval);
}

// 3. SLIDER HEADER & SLIDER KARTU DEPAN
const headerImages = [ 
  'gallery/bromo1.jpg', 
  'gallery/rakum1.jpg',
  'gallery/regulo4.jpg',
  'gallery/citytour5.jpg',
  'gallery/bromo4.jpg',
  'gallery/bromo3.jpg',
  'gallery/rakum2.jpg',
  'gallery/waterfall2.jpg',
  'gallery/regulo1.jpg',
  'gallery/citytour3.jpg',
  'gallery/rakum3.jpg'
];
let headerIndex = 0;

function startHeaderSlider() {
  const headerElem = document.querySelector('header');
  if (!headerElem) return;

  setInterval(() => {
    headerIndex = (headerIndex + 1) % headerImages.length;
    headerElem.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${headerImages[headerIndex]}')`;
  }, 4000);
}

function startCardImageSlider() {
  const cards = document.querySelectorAll('.trip-card');

  cards.forEach(card => {
    const imagesData = card.getAttribute('data-images');
    if (!imagesData) return;

    try {
      const images = JSON.parse(imagesData);
      if (images.length <= 1) return;

      let imgIndex = 0;
      const imgElement = card.querySelector('.card-img');

      setInterval(() => {
        if (imgElement) {
          imgElement.style.opacity = '0.3';
          setTimeout(() => {
            imgIndex = (imgIndex + 1) % images.length;
            imgElement.src = images[imgIndex];
            imgElement.style.opacity = '1';
          }, 400);
        }
      }, 3500);
    } catch(e) {}
  });
}

// 4. PENCARIAN PAKET
function searchTrip() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  let input = searchInput.value.toLowerCase();
  let cards = document.getElementsByClassName('trip-card');

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector('.trip-title').innerText.toLowerCase();
    let desc = cards[i].querySelector('.trip-desc').innerText.toLowerCase();

    if (title.includes(input) || desc.includes(input)) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }

  let tripSection = document.getElementById('paket-trip');
  if (tripSection) {
    tripSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 5. FITUR POPUP TATA LETAK ALBUM & LIGHTBOX 31 FOTO BROMO
let currentBromoIndex = 1;
const totalBromoPhotos = 31;

function openBromoGallery() {
  renderAlbumGrid();
  showAlbumView();
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal) galleryModal.style.display = 'flex';
}

function renderAlbumGrid() {
  const container = document.getElementById('albumGridContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 1; i <= totalBromoPhotos; i++) {
    const imgThumb = document.createElement('img');
    imgThumb.src = `gallery/Gbromo${i}.jpg`;
    imgThumb.alt = `Foto Bromo ${i}`;
    imgThumb.className = 'album-thumb-item';
    imgThumb.onclick = function() {
      openSinglePhoto(i);
    };
    container.appendChild(imgThumb);
  }
}

function showAlbumView() {
  const albumView = document.getElementById('galleryAlbumView');
  const singleView = document.getElementById('gallerySingleView');
  if (albumView) albumView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';
}

function openSinglePhoto(index) {
  currentBromoIndex = index;
  updateGalleryImage();
  const albumView = document.getElementById('galleryAlbumView');
  const singleView = document.getElementById('gallerySingleView');
  if (albumView) albumView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';
}

function closeGalleryModal() {
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal) galleryModal.style.display = 'none';
}

function changeGalleryImg(direction) {
  currentBromoIndex += direction;
  
  if (currentBromoIndex > totalBromoPhotos) {
    currentBromoIndex = 1;
  } else if (currentBromoIndex < 1) {
    currentBromoIndex = totalBromoPhotos;
  }
  
  updateGalleryImage();
}

function updateGalleryImage() {
  const lightboxImg = document.getElementById('lightboxImg');
  const counter = document.getElementById('galleryCounter');
  
  if (lightboxImg && counter) {
    lightboxImg.src = `gallery/Gbromo${currentBromoIndex}.jpg`;
    counter.innerText = `Foto ${currentBromoIndex} dari ${totalBromoPhotos}`;
  }
}

// 6. FITUR POPUP TATA LETAK ALBUM & LIGHTBOX 41 FOTO TUMPAK SEWU (Gwaterfall)
let currentTumpakIndex = 1;
const totalTumpakPhotos = 41;

function openTumpakGallery() {
  renderTumpakAlbumGrid();
  showTumpakAlbumView();
  const tumpakModal = document.getElementById('tumpakGalleryModal');
  if (tumpakModal) tumpakModal.style.display = 'flex';
}

function renderTumpakAlbumGrid() {
  const container = document.getElementById('tumpakAlbumGridContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 1; i <= totalTumpakPhotos; i++) {
    const imgThumb = document.createElement('img');
    imgThumb.src = `gallery/Gwaterfall${i}.jpg`;
    imgThumb.alt = `Foto Tumpak Sewu ${i}`;
    imgThumb.className = 'album-thumb-item';
    imgThumb.onclick = function() {
      openTumpakSinglePhoto(i);
    };
    container.appendChild(imgThumb);
  }
}

function showTumpakAlbumView() {
  const albumView = document.getElementById('tumpakAlbumView');
  const singleView = document.getElementById('tumpakSingleView');
  if (albumView) albumView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';
}

function openTumpakSinglePhoto(index) {
  currentTumpakIndex = index;
  updateTumpakGalleryImage();
  const albumView = document.getElementById('tumpakAlbumView');
  const singleView = document.getElementById('tumpakSingleView');
  if (albumView) albumView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';
}

function closeTumpakGalleryModal() {
  const tumpakModal = document.getElementById('tumpakGalleryModal');
  if (tumpakModal) tumpakModal.style.display = 'none';
}

function changeTumpakGalleryImg(direction) {
  currentTumpakIndex += direction;
  
  if (currentTumpakIndex > totalTumpakPhotos) {
    currentTumpakIndex = 1;
  } else if (currentTumpakIndex < 1) {
    currentTumpakIndex = totalTumpakPhotos;
  }
  
  updateTumpakGalleryImage();
}

function updateTumpakGalleryImage() {
  const lightboxImg = document.getElementById('tumpakLightboxImg');
  const counter = document.getElementById('tumpakGalleryCounter');
  
  if (lightboxImg && counter) {
    lightboxImg.src = `gallery/Gwaterfall${currentTumpakIndex}.jpg`;
    counter.innerText = `Foto ${currentTumpakIndex} dari ${totalTumpakPhotos}`;
  }
}

// 7. FITUR POPUP TATA LETAK ALBUM & LIGHTBOX 13 FOTO CITY TOUR (Gcitytour)
let currentCityTourIndex = 1;
const totalCityTourPhotos = 13;

function openCityTourGallery() {
  renderCityTourAlbumGrid();
  showCityTourAlbumView();
  const cityTourModal = document.getElementById('cityTourGalleryModal');
  if (cityTourModal) cityTourModal.style.display = 'flex';
}

function renderCityTourAlbumGrid() {
  const container = document.getElementById('cityTourAlbumGridContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 1; i <= totalCityTourPhotos; i++) {
    const imgThumb = document.createElement('img');
    imgThumb.src = `gallery/Gcitytour${i}.jpg`;
    imgThumb.alt = `Foto City Tour ${i}`;
    imgThumb.className = 'album-thumb-item';
    imgThumb.onclick = function() {
      openCityTourSinglePhoto(i);
    };
    container.appendChild(imgThumb);
  }
}

function showCityTourAlbumView() {
  const albumView = document.getElementById('cityTourAlbumView');
  const singleView = document.getElementById('cityTourSingleView');
  if (albumView) albumView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';
}

function openCityTourSinglePhoto(index) {
  currentCityTourIndex = index;
  updateCityTourGalleryImage();
  const albumView = document.getElementById('cityTourAlbumView');
  const singleView = document.getElementById('cityTourSingleView');
  if (albumView) albumView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';
}

function closeCityTourGalleryModal() {
  const cityTourModal = document.getElementById('cityTourGalleryModal');
  if (cityTourModal) cityTourModal.style.display = 'none';
}

function changeCityTourGalleryImg(direction) {
  currentCityTourIndex += direction;
  
  if (currentCityTourIndex > totalCityTourPhotos) {
    currentCityTourIndex = 1;
  } else if (currentCityTourIndex < 1) {
    currentCityTourIndex = totalCityTourPhotos;
  }
  
  updateCityTourGalleryImage();
}

function updateCityTourGalleryImage() {
  const lightboxImg = document.getElementById('cityTourLightboxImg');
  const counter = document.getElementById('cityTourGalleryCounter');
  
  if (lightboxImg && counter) {
    lightboxImg.src = `gallery/Gcitytour${currentCityTourIndex}.jpg`;
    counter.innerText = `Foto ${currentCityTourIndex} dari ${totalCityTourPhotos}`;
  }
}

// 8. FITUR POPUP ALBUM & LIGHTBOX SHUTTLE RANUPANE (34 FOTO)
let currentShuttleIndex = 1;
const totalShuttlePhotos = 34;

function openShuttleGallery() {
  renderShuttleAlbumGrid();
  showShuttleAlbumView();
  const shuttleModal = document.getElementById('shuttleGalleryModal');
  if (shuttleModal) shuttleModal.style.display = 'flex';
}

function renderShuttleAlbumGrid() {
  const container = document.getElementById('shuttleAlbumGridContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 1; i <= totalShuttlePhotos; i++) {
    const imgThumb = document.createElement('img');
    imgThumb.src = `gallery/Gshuttle${i}.jpg`;
    imgThumb.alt = `Foto Shuttle ${i}`;
    imgThumb.className = 'album-thumb-item';
    imgThumb.onclick = function() {
      openShuttleSinglePhoto(i);
    };
    container.appendChild(imgThumb);
  }
}

function showShuttleAlbumView() {
  const albumView = document.getElementById('shuttleAlbumView');
  const singleView = document.getElementById('shuttleSingleView');
  if (albumView) albumView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';
}

function openShuttleSinglePhoto(index) {
  currentShuttleIndex = index;
  updateShuttleGalleryImage();
  const albumView = document.getElementById('shuttleAlbumView');
  const singleView = document.getElementById('shuttleSingleView');
  if (albumView) albumView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';
}

function closeShuttleGalleryModal() {
  const shuttleModal = document.getElementById('shuttleGalleryModal');
  if (shuttleModal) shuttleModal.style.display = 'none';
}

function changeShuttleGalleryImg(direction) {
  currentShuttleIndex += direction;
  
  if (currentShuttleIndex > totalShuttlePhotos) {
    currentShuttleIndex = 1;
  } else if (currentShuttleIndex < 1) {
    currentShuttleIndex = totalShuttlePhotos;
  }
  
  updateShuttleGalleryImage();
}

function updateShuttleGalleryImage() {
  const lightboxImg = document.getElementById('shuttleLightboxImg');
  const counter = document.getElementById('shuttleGalleryCounter');
  
  if (lightboxImg && counter) {
    lightboxImg.src = `gallery/Gshuttle${currentShuttleIndex}.jpg`;
    counter.innerText = `Foto ${currentShuttleIndex} dari ${totalShuttlePhotos}`;
  }
}

// FITUR POPUP TATA LETAK ALBUM & LIGHTBOX 47 FOTO RANU KUMBOLO (Grakum)
let currentRakumIndex = 1;
const totalRakumPhotos = 47;

function openRakumGallery() {
  renderRakumAlbumGrid();
  showRakumAlbumView();
  const rakumModal = document.getElementById('rakumGalleryModal');
  if (rakumModal) rakumModal.style.display = 'flex';
}

function renderRakumAlbumGrid() {
  const container = document.getElementById('rakumAlbumGridContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 1; i <= totalRakumPhotos; i++) {
    const imgThumb = document.createElement('img');
    imgThumb.src = `gallery/Grakum${i}.jpg`;
    imgThumb.alt = `Foto Ranu Kumbolo ${i}`;
    imgThumb.className = 'album-thumb-item';
    imgThumb.onclick = function() {
      openRakumSinglePhoto(i);
    };
    container.appendChild(imgThumb);
  }
}

function showRakumAlbumView() {
  const albumView = document.getElementById('rakumAlbumView');
  const singleView = document.getElementById('rakumSingleView');
  if (albumView) albumView.style.display = 'block';
  if (singleView) singleView.style.display = 'none';
}

function openRakumSinglePhoto(index) {
  currentRakumIndex = index;
  updateRakumGalleryImage();
  const albumView = document.getElementById('rakumAlbumView');
  const singleView = document.getElementById('rakumSingleView');
  if (albumView) albumView.style.display = 'none';
  if (singleView) singleView.style.display = 'block';
}

function closeRakumGalleryModal() {
  const rakumModal = document.getElementById('rakumGalleryModal');
  if (rakumModal) rakumModal.style.display = 'none';
}

function changeRakumGalleryImg(direction) {
  currentRakumIndex += direction;
  
  if (currentRakumIndex > totalRakumPhotos) {
    currentRakumIndex = 1;
  } else if (currentRakumIndex < 1) {
    currentRakumIndex = totalRakumPhotos;
  }
  
  updateRakumGalleryImage();
}

function updateRakumGalleryImage() {
  const lightboxImg = document.getElementById('rakumLightboxImg');
  const counter = document.getElementById('rakumGalleryCounter');
  
  if (lightboxImg && counter) {
    lightboxImg.src = `gallery/Grakum${currentRakumIndex}.jpg`;
    counter.innerText = `Foto ${currentRakumIndex} dari ${totalRakumPhotos}`;
  }
}

// DOM LOADED INITS (SLIDESHOW SAMPUL GALERI SERENTAK)
document.addEventListener('DOMContentLoaded', () => {
  startHeaderSlider();
  startCardImageSlider();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        searchTrip();
      }
    });
  }

  let gallerySlideIndex = 1;

  setInterval(() => {
    gallerySlideIndex++;

    // 1. Sampul Bromo
    const bromoImg = document.getElementById('bromoGalleryImg');
    if (bromoImg) {
      const currentBromo = ((gallerySlideIndex - 1) % 31) + 1;
      bromoImg.src = `gallery/Gbromo${currentBromo}.jpg`;
    }

    // 2. Sampul Tumpak Sewu
    const tumpakImg = document.getElementById('tumpakGalleryImg');
    if (tumpakImg) {
      const currentTumpak = ((gallerySlideIndex - 1) % 41) + 1;
      tumpakImg.src = `gallery/Gwaterfall${currentTumpak}.jpg`;
    }

    // 3. Sampul City Tour
    const cityTourImg = document.getElementById('cityTourGalleryImg');
    if (cityTourImg) {
      const currentCityTour = ((gallerySlideIndex - 1) % 13) + 1;
      cityTourImg.src = `gallery/Gcitytour${currentCityTour}.jpg`;
    }

    // 4. Sampul Shuttle Ranupane
    const shuttleImg = document.getElementById('shuttleGalleryImg');
    if (shuttleImg) {
      const currentShuttle = ((gallerySlideIndex - 1) % 34) + 1;
      shuttleImg.src = `gallery/Gshuttle${currentShuttle}.jpg`;
    }

    // 5. Sampul Ranu Kumbolo
    const rakumImg = document.getElementById('rakumGalleryImg');
    if (rakumImg) {
      const currentRakum = ((gallerySlideIndex - 1) % 47) + 1;
      rakumImg.src = `gallery/Grakum${currentRakum}.jpg`;
    }

  }, 3000);
});

// TUTUP MODAL JIKA KLIK AREA LUAR
window.addEventListener('click', function(event) {
  const tripModal = document.getElementById('tripModal');
  const galleryModal = document.getElementById('galleryModal');
  const tumpakModal = document.getElementById('tumpakGalleryModal');
  const cityTourModal = document.getElementById('cityTourGalleryModal');
  const shuttleModal = document.getElementById('shuttleGalleryModal');
  const rakumModal = document.getElementById('rakumGalleryModal');

  if (event.target === tripModal) closeTripModal();
  if (event.target === galleryModal) closeGalleryModal();
  if (event.target === tumpakModal) closeTumpakGalleryModal();
  if (event.target === cityTourModal) closeCityTourGalleryModal();
  if (event.target === shuttleModal) closeShuttleGalleryModal();
  if (event.target === rakumModal) closerakumGalleryModal();
});
