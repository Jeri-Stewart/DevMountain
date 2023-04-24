console.log(`hello world`);

let addMovie = (event) => {
  event.preventDefault();
  let inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  let list = document.querySelector("ul");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  list.appendChild(movie);
  inputField = "";
};

let form = document.querySelector("form");
let deleteMovie = (evnt) => {
  evnt.target.parentNode.remove();
};

form.addEventListener("submit", addMovie);

let crossOffMovie = (e) => {
  e.target.classList.toggle("checked");
};
