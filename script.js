const gestesPossibles = ["pierre", "papier", "ciseaux"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const indexAleatoire = Math.floor(Math.random() * gestesPossibles.length);
  const gesteAleatoire = gestesPossibles[indexAleatoire];
  return gesteAleatoire;
}

function getHumanChoice() {
  let saisieUtilisateur = prompt("pierre, papier ou ciseaux: ");
  if (saisieUtilisateur === null) {
    console.log("Jeu annulé!");
    return;
  }
  const gesteJoueur = saisieUtilisateur.trim().toLowerCase();
  if (!gestesPossibles.includes(gesteJoueur)) {
    return getHumanChoice();
  }
  return gesteJoueur;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Ce tour est nul.");
  } else if (humanChoice === "pierre") {
    if (computerChoice === "ciseaux") {
      console.log(
        "Le joueur gagne ce tour car " +
          computerChoice +
          " bat " +
          humanChoice +
          "."
      );
      humanScore++;
    } else if (computerChoice === "papier") {
      console.log(
        "La machine gagne ce tour car " +
          computerChoice +
          " bat " +
          humanChoice +
          "."
      );
      computerScore++;
    }
  } else if (humanChoice === "papier") {
    if (computerChoice === "pierre") {
      console.log(
        "Le joueur gagne ce tour car " +
          humanChoice +
          " bat " +
          computerChoice +
          "."
      );
      humanScore++;
    } else if (computerChoice === "ciseaux") {
      console.log(
        "La machine gagne ce tour car " +
          computerChoice +
          " bat " +
          humanChoice +
          "."
      );
      computerScore++;
    }
  } else if (humanChoice === "ciseaux") {
    if (computerChoice === "papier") {
      console.log(
        "Le joueur gagne ce tour car " +
          humanChoice +
          " bat " +
          computerChoice +
          "."
      );
      humanScore++;
    } else if (computerChoice === "pierre") {
      console.log(
        "La machine gagne ce tour car " +
          computerChoice +
          " bat " +
          humanChoice +
          "."
      );
      computerScore++;
    }
  }

  if (humanChoice) {
      console.log(
        "Le score est: Joueur(" + humanScore + ") - machine(" + computerScore + ")"
      );
  }
}


function playGame(nombreTours = 5) {
    for (let numeroTour = 0 ; numeroTour < nombreTours ; numeroTour++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(
      "Score final: Joueur(" + humanScore + ") - machine(" + computerScore + ")"
    );

    if (computerScore === humanScore) {
        console.log("La partie est nulle.");
    } else if (computerScore < humanScore) {
        console.log("Le joueur gagne la partie.");
    } else {
        console.log("La machine gagne la partie.");
    }
}

playGame();
