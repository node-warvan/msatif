document.addEventListener("DOMContentLoaded", function() {
    const pacarName = "Meira"; // Ganti dengan nama pacar
    document.getElementById("pacarName").innerText = pacarName;

    // Memulai backsound musik
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();

    const gallery = document.getElementById("gallery");

    // Tambahkan gambar-gambar ke dalam galeri
    const imageSources = [
        "media/img1.jpg",
        "media/img2.jpg",
        "media/img3.jpg",
        // Tambahkan lebih banyak gambar sesuai kebutuhan
    ];

    // Fungsi untuk menambahkan gambar ke galeri
    function addImage(src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Romantic Image";
        gallery.appendChild(img);
    }

    // Tambahkan gambar-gambar dari sumber yang sudah ada
    imageSources.forEach(src => addImage(src));

    // Contoh untuk menambahkan gambar baru setiap beberapa detik
    let imageIndex = 0;
    setInterval(() => {
        addImage(imageSources[imageIndex % imageSources.length]);
        imageIndex++;
    }, 5000); // Menambahkan gambar baru setiap 5 detik
});
