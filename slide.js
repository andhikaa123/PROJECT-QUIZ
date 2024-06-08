// Mendapatkan semua elemen gambar pada slider dengan kelas "slides"
const slides = document.querySelectorAll(".slides img");

// Variabel untuk melacak indeks slide yang sedang ditampilkan
let slideIndex = 0;

// Variabel yang menyimpan ID interval untuk mengontrol progresi otomatis slide
let interValid = null;

// Fungsi untuk inisialisasi slider, dipanggil pada saat DOM dimuat
document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider () {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide")
        interValid = setInterval(nextSlide, 3000)
    }
}

function showSlide (index) {
    if (index >= slides.length){
        slideIndex = 0
    }
    else if (index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach ((slide) => {
        slide.classList.remove("displaySlide")
    })

    slides[slideIndex].classList.add("displaySlide")
}

function prevSlide () {
    slideIndex--
    clearInterval(interValid)
    showSlide(slideIndex)
}

function nextSlide () {
    slideIndex++
    showSlide(slideIndex)
}