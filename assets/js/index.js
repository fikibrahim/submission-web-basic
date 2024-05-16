window.onload = function () {
  alert("Selamat datang di website KopiKuSukaIndonesia");
};

var zoomableImages = document.querySelectorAll(".zoomable-image");

// Tambahkan event listener untuk setiap gambar
zoomableImages.forEach(function (image) {
  image.addEventListener("click", function () {
    // Buat elemen div untuk overlay
    var overlay = document.createElement("div");
    overlay.className = "zoomed-image";

    // Buat elemen img untuk menampilkan gambar yang di-zoom
    var zoomedImage = document.createElement("img");
    zoomedImage.src = this.src;
    overlay.appendChild(zoomedImage);

    // Tambahkan overlay ke dalam body dokumen
    document.body.appendChild(overlay);

    // Tambahkan event listener untuk menutup overlay ketika overlay diklik
    overlay.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
