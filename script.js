document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typewriter-text");
    const words = ["Developer", "Designer", "Programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        textElement.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    typeEffect();

    function toggleDropdown() {
        const dropdown = document.querySelector(".dropdown");
        dropdown.classList.toggle("active");
    }

    // Event listener untuk tombol hamburger
    document.querySelector(".hamburg").addEventListener("click", toggleDropdown);
    
    // Event listener untuk tombol close (X)
    document.querySelector(".cancel").addEventListener("click", toggleDropdown);

    // Tutup dropdown saat item diklik dan lakukan smooth scroll
    document.querySelectorAll(".dropdown .links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah perilaku default anchor link
            const targetId = this.getAttribute("href").substring(1); // Ambil ID tanpa #
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Sesuaikan offset jika ada navbar fixed
                    behavior: "smooth"
                });
            }

            // Tutup dropdown setelah klik
            document.querySelector(".dropdown").classList.remove("active");
        });
    });
});
