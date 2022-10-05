const addMovieModal = document.getElementById("add-modal");
const startAddMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");

const showBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleModalClass = () => {
  addMovieModal.classList.toggle("visible");
  showBackdrop();
};

const handleCloseModal = () => {
  toggleModalClass();
};

startAddMovie.addEventListener("click", toggleModalClass);
backdrop.addEventListener("click", handleCloseModal);
