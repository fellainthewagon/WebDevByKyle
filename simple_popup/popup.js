const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#open-modal-btn");
const closeBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
