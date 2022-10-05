const addMovieModal = document.getElementById("add-modal");
const startAddMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancel = addMovieModal.querySelector(".btn--passive");
const confirm = cancel.nextElementSibling;
const userInputs = document.querySelectorAll("input");

const showBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleModalClass = () => {
  addMovieModal.classList.toggle("visible");
  showBackdrop();
};

const handleClose = () => {
  toggleModalClass();
};

const handleSubmit = () => {
  const textInputs = userInputs[0].value;
  const imgInput = userInputs[1].value;
  const ratingInput = userInputs[2].value;

  if (!textInputs.trim() || !imgInput.trim() || +ratingInput < 1) {
    alert("Please fill all the fields!");
  } else if (+ratingInput > 5) {
    alert("Rating should less then 5!");
  }
};

startAddMovie.addEventListener("click", toggleModalClass);
backdrop.addEventListener("click", handleClose);
cancel.addEventListener("click", handleClose);
confirm.addEventListener("click", handleSubmit);
