// console.log("Hello World");

const gestesPossibles = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
  const indexAleatoire = Math.floor(Math.random() * gestesPossibles.length);
  const gesteAleatoire = gestesPossibles[indexAleatoire];
  return gesteAleatoire;
}

// console.log(getComputerChoice())

function getHumanChoice() {
  let gesteJoueur = prompt("Pierre, papier ou ciseaux: ").trim().toLowerCase();
  if (!gestesPossibles.includes(gesteJoueur)) {
    return getHumanChoice();
  }
  return gesteJoueur;
}

// console.log(getHumanChoice());
