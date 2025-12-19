/*Erhoeht den Zaehler um 10 und aktualisiert den Text von h1 und header*/

let counter = 0;
function createNewElement() {
  let newElement = document.querySelector("h1");

  counter = counter + 10;
  newElement.textContent = counter;
  let titleElement = document.querySelector("header");

  titleElement.textContent = count;
}
