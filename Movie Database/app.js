const addMovieModal = document.getElementById("add-modal");
const startAddMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancel = addMovieModal.querySelector(".btn--passive");
const confirm = cancel.nextElementSibling;
const userInputs = document.querySelectorAll("input");

const movies = [];

const showBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleModal = () => {
  addMovieModal.classList.toggle("visible");
  showBackdrop();
};

const clearInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const handleClose = () => {
  toggleModal();
};

const handleSubmit = () => {
  const titleInput = userInputs[0].value;
  const imgInput = userInputs[1].value;
  const ratingInput = userInputs[2].value;

  if (!titleInput.trim() || !imgInput.trim() || +ratingInput < 1) {
    alert("Please fill all the fields!");
  } else if (+ratingInput > 5) {
    alert("Rating should less then 5!");
  }

  const newMovie = {
    title: titleInput,
    img: imgInput,
    rating: ratingInput,
  };

  movies.push(newMovie);
  handleClose();
  clearInputs();
};

startAddMovie.addEventListener("click", toggleModal);
backdrop.addEventListener("click", handleClose);
cancel.addEventListener("click", handleClose);
confirm.addEventListener("click", handleSubmit);
