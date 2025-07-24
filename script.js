// console.log("Hello World");

const gestesPossibles = ["pierre", "papier", "ciseaux"];

function getComputerChoice() {
    const indexAleatoire = Math.floor(Math.random() * gestesPossibles.length);
    const gesteAleatoire = gestesPossibles[indexAleatoire];
    return gesteAleatoire;
}

// console.log(getComputerChoice())

function getHumanChoice() {
    let gesteJoueur = prompt("Pierre, feuille ou ciseaux: ").toLowerCase().trim()
    return gesteJoueur;
}

console.log(getHumanChoice());
