let obj;
let actualQuery = ""; //<-- Let's us know what query is being selected

function turnOn() {
  var actualList = document.getElementById("listOf");
  actualQuery = actualList.options[actualList.selectedIndex].value;

  fetch(`https://swapi.dev/api/${actualQuery}/`)
    .then((res) => res.json())
    .then((data) => (obj = data.results))
    .then(() => console.log(obj));
  document.getElementById("planets").setAttribute("class", "off");
  document.getElementById("vehicles").setAttribute("class", "off");
  document.getElementById("species").setAttribute("class", "off");
  document.getElementById("starships").setAttribute("class", "off");
  document.getElementById("films").setAttribute("class", "off");
  document.getElementById("people").setAttribute("class", "off");
  document.getElementById(actualQuery).classList.toggle("on");
}

function sortPorNombre(a, b) {
  if (a.name == b.name) return 0;
  if (a.name > b.name) return 1;
  else return -1;
}
/////////////////////////Planeta/////////////////////////
function sortPlanetaNombre() {
  //Lo que este bloque de codigo hace es que comprueba si ya está montada un 'ul' con este id y si ya esta entonces no lo pone de nuevo.
  if (document.getElementById("planets-order-name")) {
    return;
  }
  //

  if (document.getElementById("planets-order-population")) {
    let container = document.getElementById("planets-order-population");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(sortPorNombre);
  let divIdPlanetas = document.getElementById("planets");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "planets-order-name");

  for (values of obj) {
    let items = values.name;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdPlanetas.appendChild(newUl);
  }
}

function sortPlanetaPoblacion() {
  if (document.getElementById("planets-order-population")) {
    return;
  }

  // Este bloque de codigo lo que hace es si hay otra tabla en la pantalla, lo quita y pone una nueva tabla con lo que el cliente nos pide.
  if (document.getElementById("planets-order-name")) {
    let container = document.getElementById("planets-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  //
  obj.sort(function (a, b) {
    return a.population - b.population;
  });
  let divIdPlanetas = document.getElementById("planets");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "planets-order-population");

  for (values of obj) {
    let items = values.name + "---->" + values.population;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdPlanetas.appendChild(newUl);
  }
}

//////////////////////////////////////////////////People//////////////////////////////////////////////////
function sortPeopleNombre() {
  document.getElementById("sort-gender").setAttribute("class", "off");

  if (document.getElementById("people-order-name")) {
    return;
  }

  if (document.getElementById("people-order-height")) {
    let container = document.getElementById("people-order-height");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("people-order-gender")) {
    let container = document.getElementById("people-order-gender");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  obj.sort(sortPorNombre);
  let divIdPeople = document.getElementById("people");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "people-order-name");

  for (values of obj) {
    let items = values.name;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdPeople.appendChild(newUl);
  }
}

function sortPeopleAltura() {
  document.getElementById("sort-gender").setAttribute("class", "off");
  if (document.getElementById("people-order-height")) {
    return;
  }

  if (document.getElementById("people-order-name")) {
    let container = document.getElementById("people-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("people-order-gender")) {
    let container = document.getElementById("people-order-gender");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  obj.sort(function (a, b) {
    return a.height - b.height;
  });
  let divIdPeople = document.getElementById("people");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "people-order-height");

  for (values of obj) {
    let items = values.name + " ---->" + values.height + " cm";
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdPeople.appendChild(newUl);
  }
}
function sortPeopleGenero() {
  document.getElementById("sort-gender").setAttribute("class", "on");
  if (document.getElementById("people-order-gender")) {
    return;
  }

  if (document.getElementById("people-order-name")) {
    let container = document.getElementById("people-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("people-order-height")) {
    let container = document.getElementById("people-order-height");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
}

function peopleGenderOption(val) {
  switch (val) {
    case "male":
      if (document.getElementById("male")) {
        return;
      }

      if (document.getElementById("female")) {
        let container = document.getElementById("female");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      if (document.getElementById("n/a")) {
        let container = document.getElementById("n/a");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      let filteredMale = obj.filter((el) => el.gender == "male");
      let divIdMale = document.getElementById("sort-gender");
      let newUlMale = document.createElement("ul");
      newUlMale.setAttribute("id", "male");

      for (values of filteredMale) {
        let items = values.name + " ---->" + values.gender;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items));
        newUlMale.appendChild(li);
        divIdMale.appendChild(newUlMale);
      }
      break;
    case "female":
      if (document.getElementById("female")) {
        return;
      }

      if (document.getElementById("male")) {
        let container = document.getElementById("male");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      if (document.getElementById("n/a")) {
        let container = document.getElementById("n/a");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      let filteredFemale = obj.filter((el) => el.gender == "female");
      let divIdFemale = document.getElementById("sort-gender");
      let newUlFemale = document.createElement("ul");
      newUlFemale.setAttribute("id", "female");

      for (values of filteredFemale) {
        let items = values.name + " ---->" + values.gender;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items));
        newUlFemale.appendChild(li);
        divIdFemale.appendChild(newUlFemale);
      }
      break;
    case "n/a":
      if (document.getElementById("n/a")) {
        return;
      }

      if (document.getElementById("male")) {
        let container = document.getElementById("male");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      if (document.getElementById("female")) {
        let container = document.getElementById("female");
        let delDiv = container.parentNode;
        delDiv.removeChild(container);
      }
      let filteredNA = obj.filter((el) => el.gender == "n/a");
      let divIdNA = document.getElementById("sort-gender");
      let newUlNA = document.createElement("ul");
      newUlNA.setAttribute("id", "n/a");

      for (values of filteredNA) {
        let items = values.name + " ---->" + values.gender;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items));
        newUlNA.appendChild(li);
        divIdNA.appendChild(newUlNA);
      }
  }
}

//////////////////////////////////////////////////Films//////////////////////////////////////////////////
function sortFilmsTitle() {
  if (document.getElementById("films-order-title")) {
    return;
  }

  if (document.getElementById("films-order-date")) {
    let container = document.getElementById("films-order-date");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-episode_id")) {
    let container = document.getElementById("films-order-episode_id");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-director")) {
    let container = document.getElementById("films-order-director");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    if (a.title == b.title) return 0;
    if (a.title > b.title) return 1;
    else return -1;
  });

  let divIdFilms = document.getElementById("films");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "films-order-title");

  for (values of obj) {
    let items = values.title;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}
function sortFilmsDate() {
  if (document.getElementById("films-order-date")) {
    return;
  }

  if (document.getElementById("films-order-episode_id")) {
    let container = document.getElementById("films-order-episode_id");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-director")) {
    let container = document.getElementById("films-order-director");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-title")) {
    let container = document.getElementById("films-order-title");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    return a.release_date - b.release_date;
  });

  let divIdFilms = document.getElementById("films");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "films-order-date");

  for (values of obj) {
    let items = values.release_date + " ---->" + values.title;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}

function sortFilmsEpisode() {
  if (document.getElementById("films-order-episode_id")) {
    return;
  }

  if (document.getElementById("films-order-date")) {
    let container = document.getElementById("films-order-date");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-director")) {
    let container = document.getElementById("films-order-director");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-title")) {
    let container = document.getElementById("films-order-title");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    return a.episode_id - b.episode_id;
  });

  let divIdFilms = document.getElementById("films");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "films-order-episode_id");

  for (values of obj) {
    let items = values.episode_id + " ---->" + values.title;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}

function sortFilmsDirector() {
  if (document.getElementById("films-order-director")) {
    return;
  }

  if (document.getElementById("films-order-date")) {
    let container = document.getElementById("films-order-date");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-episode_id")) {
    let container = document.getElementById("films-order-episode_id");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("films-order-title")) {
    let container = document.getElementById("films-order-title");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    if (a.director == b.director) return 0;
    if (a.director > b.director) return 1;
    else return -1;
  });

  let divIdFilms = document.getElementById("films");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "films-order-director");

  for (values of obj) {
    let items = values.director + " ---->" + values.title;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}
//////////////////////////////////////////////////Vehicles//////////////////////////////////////////////////

function sortVehiclesName() {
  if (document.getElementById("vehicles-order-name")) {
    return;
  }

  if (document.getElementById("vehicles-order-creation")) {
    let container = document.getElementById("vehicles-order-creation");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(sortPorNombre);

  let divIdFilms = document.getElementById("vehicles");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "vehicles-order-name");

  for (values of obj) {
    let items = values.name;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}

function sortVehiclesCreation() {
  if (document.getElementById("vehicles-order-creation")) {
    return;
  }

  if (document.getElementById("vehicles-order-name")) {
    let container = document.getElementById("vehicles-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    return b.created - a.created;
  });

  let divIdFilms = document.getElementById("vehicles");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "vehicles-order-creation");

  for (values of obj) {
    let items = values.name + " ---->" + values.created;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}

//////////////////////////////////////////////////StarShips//////////////////////////////////////////////////
function sortStarshipsName() {
  if (document.getElementById("starships-order-name")) {
    return;
  }

  if (document.getElementById("starships-order-cost")) {
    let container = document.getElementById("starships-order-cost");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("starships-order-passanger")) {
    let container = document.getElementById("starships-order-passanger");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(sortPorNombre);

  let divIdFilms = document.getElementById("starships");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "starships-order-name");

  for (values of obj) {
    let items = values.name;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}
function sortStarshipsCost() {
  if (document.getElementById("starships-order-cost")) {
    return;
  }

  if (document.getElementById("starships-order-name")) {
    let container = document.getElementById("starships-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("starships-order-passanger")) {
    let container = document.getElementById("starships-order-passanger");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    return a.cost_in_credits - b.cost_in_credits;
  });

  let divIdFilms = document.getElementById("starships");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "starships-order-cost");

  for (values of obj) {
    if (values.cost_in_credits === "unknown") return;
    let items = values.name + " ---->" + values.cost_in_credits + " $";
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}

function sortStarshipsPassanger() {
  if (document.getElementById("starships-order-passanger")) {
    return;
  }

  if (document.getElementById("starships-order-name")) {
    let container = document.getElementById("starships-order-name");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }
  if (document.getElementById("starships-order-cost")) {
    let container = document.getElementById("starships-order-cost");
    let delDiv = container.parentNode;
    delDiv.removeChild(container);
  }

  obj.sort(function (a, b) {
    return a.passengers - b.passengers;
  });

  let divIdFilms = document.getElementById("starships");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "starships-order-passanger");

  for (values of obj) {
    let items = values.name + " ----> " + values.passengers;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}
//////////////////////////////////////////////////Species//////////////////////////////////////////////////
function sortSpecies() {
  if (document.getElementById("species-order")) {
    return;
  }
  obj.sort(function (a, b) {
    return a.passengers - b.passengers;
  });

  let divIdFilms = document.getElementById("species");
  let newUl = document.createElement("ul");
  newUl.setAttribute("id", "species-order");

  for (values of obj) {
    let items = values.name;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items));
    newUl.appendChild(li);
    divIdFilms.appendChild(newUl);
  }
}
