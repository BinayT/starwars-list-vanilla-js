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
