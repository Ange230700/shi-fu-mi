**Introduction**

Pour ce projet, vous allez créer le jeu Pierre-Papier-Ciseaux. Ce jeu se jouera entièrement dans la console de votre navigateur.

**Approche de résolution de problème**

C'est pour certain.e.s d'entre vous votre premier projet de code. Voilà quelques astuces et pistes pour que cela se passe au mieux.
Pour chaque étape de ce projet :
- On commence par visualiser le résultat que l'on souhaite atteindre. Si on n'arrive pas à le visualiser, on l'écrit, on le dessine ou on en discute avec une personne consentante.
- On écrit le code qui nous permet d'atteindre tout ou partie de notre objectif.
    - On teste ce que l'on vient de faire.
- On recommence jusqu'à la fin du projet !

En cas de blocage, vous pouvez :
- En discuter avec vos collègues pour comprendre ce qui coince pour vous.
- Prendre 5 minutes de pause pour vous changer les idées.

**Étape 1 : Configurer la structure du projet**

- Créez un nouveau dépôt Git pour votre projet.
- Créez un document HTML vierge avec une balise `<script>`.
- Créez un script.js relié au HTML.
- Vérifiez si JavaScript est correctement lié :
    - Écrivez `console.log("Hello World")` en JavaScript.
    - Vérifiez si "Hello World" est affiché dans la console du navigateur lorsque vous ouvrez votre page web.

Vous n'avez pas besoin d'écrire de code supplémentaire dans le fichier HTML. Ce jeu se joue entièrement via la console.

**Étape 2 : Écrire la logique pour obtenir le choix de l'ordinateur**

Votre jeu se jouera contre l'ordinateur. Vous allez écrire une fonction qui retourne aléatoirement "pierre", "papier" ou "ciseaux".

- Créez une nouvelle fonction nommée `getComputerChoice`.
- Écrivez le code de sorte que `getComputerChoice` retourne aléatoirement l'une des valeurs suivantes : "pierre", "papier" ou "ciseaux".
    - Astuce : La méthode `Math.random` retourne un nombre aléatoire compris entre 0 (inclus) et 1 (exclus). Réfléchissez à la manière dont vous pouvez utiliser cela pour retourner conditionnellement l'un des choix multiples.
- Testez que votre fonction retourne ce que vous attendez en utilisant `console.log` ou les outils de développement du navigateur avant de passer à l'étape suivante.

**Étape 3 : Écrire la logique pour obtenir le choix de l'humain**

Votre jeu sera joué par un joueur humain. Vous allez écrire une fonction qui prend le choix de l'utilisateur et le retourne.

- Créez une nouvelle fonction nommée `getHumanChoice`.
- Écrivez le code de sorte que `getHumanChoice` retourne l'un des choix valides en fonction de l'entrée de l'utilisateur.
    - Astuce : Utilisez la méthode `prompt` pour obtenir l'entrée de l'utilisateur.
    - Pas besoin de vérifier si l'utilisateur entre un choix invalide. Pour l'instant, on considère qu'il ne se trompe jamais entre pierre, papier et ciseaux.
- Testez ce que votre fonction retourne en utilisant `console.log`.

**Étape 4 : Déclarer les variables de score des joueurs**

Votre jeu gardera une trace du score des joueurs. Vous allez écrire des variables pour suivre le score des joueurs.

- Créez deux nouvelles variables nommées `humanScore` et `computerScore` dans la portée globale.
- Initialisez ces variables avec la valeur 0.

**Étape 5 : Écrire la logique pour jouer un tour**

Votre jeu se jouera tour par tour. Vous allez écrire une fonction qui prend les choix des joueurs humain et ordinateur comme arguments, joue un tour, incrémente le score du gagnant du tour et affiche une annonce du gagnant.

- Créez une nouvelle fonction nommée `playRound`.
- Définissez deux paramètres pour `playRound` : `humanChoice` et `computerChoice`. Utilisez ces deux paramètres pour prendre les choix des joueurs humain et ordinateur comme arguments.
- Rendez le paramètre `humanChoice` de votre fonction insensible à la casse afin que les joueurs puissent entrer "pierre", "PIERRE", "PiErRe", ou d'autres variations.
- Écrivez le code de votre fonction `playRound` pour afficher une chaîne de caractères représentant le gagnant du tour, par exemple : "Vous perdez ! Papier bat Pierre".
- Incrémentez la variable `humanScore` ou `computerScore` en fonction du gagnant du tour.

```javascript
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

**Étape 6 : Écrire la logique pour jouer l'ensemble du jeu**

Votre jeu se jouera en 5 tours. Vous allez écrire une fonction nommée `playGame` qui appelle `playRound` pour jouer 5 tours, garde une trace des scores et déclare un gagnant à la fin.

- Créez une nouvelle fonction nommée `playGame`.
- Déplacez votre fonction `playRound` et les variables de score pour qu'elles soient déclarées à l'intérieur de la nouvelle fonction `playGame`.
- Jouez 5 tours en appelant `playRound` 5 fois.
    - Astuce : Lorsque vous assignez un appel de fonction à une variable, la valeur de retour de cette fonction est assignée à la variable. Accéder à la variable par la suite ne rappelle pas la fonction. Vous devez rappeler les fonctions de choix pour obtenir de nouveaux choix à chaque tour.
    - Réorganisez vos fonctions précédentes ou créez davantage de fonctions auxiliaires si nécessaire. En particulier, vous voudrez peut-être changer les valeurs de retour en quelque chose de plus utile.
    - Si vous connaissez déjà les boucles, vous pouvez les utiliser. Sinon, ne vous inquiétez pas ! Ce qui est important, c'est d'avoir un code qui fonctionne, pas un code parfait :).

**Aller plus loin**

Si vous avez fini ce projet et qu'il vous reste du temps, vous pouvez tenter de mettre en place les fonctionnalités suivantes. Attention, cela peut être très compliqué selon votre niveau technique. N'hésitez pas à vous rassembler en groupe.
- Utiliser une boucle dans la fonction `playGame` pour ne pas avoir à appeler 5 fois manuellement la fonction `playRound`.
- Ajouter une gestion des erreurs dans `getHumanChoice` pour vérifier que la valeur fournie par le joueur est bonne. Sinon, on peut afficher un message d'erreur et arrêter la partie.

**Aller encore plus loin**

Si vous avez tout fini et que vous rêvez de vous envoler dans les étoiles, vous pouvez reprendre ce code et faire en sorte que l'on puisse y jouer via le navigateur, au lieu de la console. Cela veut dire qu'il va falloir :
- Créer le HTML qui permettra :
    - D'afficher le score.
    - De choisir pour le joueur entre pierre, papier et ciseaux.
- Modifier le JavaScript pour :
    - Mettre un `eventListener` sur le clic du joueur sur un des choix.
- Modifier le HTML pour :
    - Mettre à jour le score.
    - Indiquer quand le jeu est fini.