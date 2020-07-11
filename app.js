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
  console.log(a);
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
      newUlFemale.setAttribute("id", "male");

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
      newUlNA.setAttribute("id", "male");

      for (values of filteredNA) {
        let items = values.name + " ---->" + values.gender;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(items));
        newUlNA.appendChild(li);
        divIdNA.appendChild(newUlNA);
      }
  }
}
