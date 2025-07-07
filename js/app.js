$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

document.querySelectorAll('.carrossel-container').forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    let index = 0;

    prevBtn.addEventListener('click', () => {
        index = index > 0 ? index - 1 : carrossel.children.length - 1;
        updateCarrossel();
    });

    nextBtn.addEventListener('click', () => {
        index = index < carrossel.children.length - 1 ? index + 1 : 0;
        updateCarrossel();
    });

    function updateCarrossel() {
        const width = carrossel.clientWidth;
        carrossel.style.transform = `translateX(-${index * width}px)`;
    }
});

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".imageModal");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});