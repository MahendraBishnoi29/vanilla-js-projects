const addMovieModal = document.getElementById("add-modal");
const startAddMovie = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancel = addMovieModal.querySelector(".btn--passive");
const confirm = cancel.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

const renderNewMovie = (title, imageUrl, rating) => {
  const newMovieElm = document.createElement("li");
  newMovieElm.className = "movie-element";
  newMovieElm.innerHTML = `
  <div class="movie-element__image">
   <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
   <h2>${title}</h2>
   <p>${rating}/5 stars</p>
  </div>
    `;
  const rootList = document.getElementById("movie-list");
  rootList.append(newMovieElm);
};

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
  renderNewMovie(newMovie.title, newMovie.img, newMovie.rating);
  updateUI();
};

startAddMovie.addEventListener("click", toggleModal);
backdrop.addEventListener("click", handleClose);
cancel.addEventListener("click", handleClose);
confirm.addEventListener("click", handleSubmit);
