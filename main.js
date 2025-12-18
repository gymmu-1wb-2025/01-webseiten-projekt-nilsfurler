/* Erstellt bei jedem Funktionsaufruf einen neuen nummerierten Absatz und fügt ihn in main ein */
let counter = 0;

function createNewElement() {
  let newElement = document.createElement("p");

  counter = counter + 1;

  newElement.textContent = "Element" + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}
