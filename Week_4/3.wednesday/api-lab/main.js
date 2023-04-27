let getResidentsButton = document.querySelector("#get-residents-button");

const buttonClicked = () => {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    let Alderaan = res.data.results; // assign result to an variable; the result is an array with the search results and the aleraan planeet
    let url = Alderaan[0].residents; // extract the array of urls from the alderaan obj
    for (let i = 0; i < url.length; i++) {
      // loop through url array
      axios.get(url[i]).then((res) => {
        //
        let name = res.data.name; // extract the name from each object
        let body = document.querySelector("body"); // select body tag
        let newHeading = document.createElement("h2"); // create h2 element to insert into body
        newHeading.textContent = name; // define the text of the h2 element to be the name extracted
        body.appendChild(newHeading); // post the h2 tag into the body
      });
    }
  });
};

getResidentsButton.addEventListener("click", buttonClicked);
