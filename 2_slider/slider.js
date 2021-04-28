const slides = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let slideIndex = 1;

function showSlides(index) {
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

nextBtn.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

prevBtn.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});

showSlides(slideIndex);
