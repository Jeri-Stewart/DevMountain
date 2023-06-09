const getAllBtn = document.querySelector("#all");
const charBtns = document.querySelectorAll(".char-btns");
const ageForm = document.querySelector("#age-form");
const ageInput = document.querySelector("#age-input");
const createForm = document.querySelector("#create-form");
const newFirstInput = document.querySelector("#first");
const newLastInput = document.querySelector("#last");
const newGenderDropDown = document.querySelector("select");
const newAgeInput = document.querySelector("#age");
const newLikesText = document.querySelector("textarea");
const charContainer = document.querySelector("section");

const baseURL = `http://localhost:4000`; // local host is the same as 127.0.0.1

function createCharacterCard(char) {
  let charCard = document.createElement("div");
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`;

  charContainer.appendChild(charCard);
}

function clearCharacters() {
  charContainer.innerHTML = ``;
}

const getSingleChar = (event) => {
  axios
    .get(`${baseURL}/character/${event.target.id}`)
    .then((response) => {
      console.log(response);
      clearCharacters();
      createCharacterCard(response.data);
    })

    .catch((err) => console.log(err));
};
const getAllChars = () => {
  axios
    .get(`${baseURL}/characters`)
    .then((res) => {
      console.log(res.data);
      clearCharacters();
      res.data.map((char) => createCharacterCard(char));
    })
    .catch((err) => console.log(err));
};

const getOldChars = (event) => {
  axios
    .get(`${baseURL}/character?age=${ageInput.value}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
const addNewChar = (e) => {
  e.preventDefault();
  const body = {
    firName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: [newLikesText.value],
  };
  axios
    .post(`${baseURL}/character`, body)
    .then((res) => console.log(res.date))
    .catch((err) => console.log(err));
};

for (let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener("click", getSingleChar);
}

ageForm.addEventListener("submit", getOldChars);
getAllBtn.addEventListener("click", getAllChars);
