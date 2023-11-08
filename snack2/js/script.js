const soccerTeams = [
  {
    nome: "Fiorentina",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

soccerTeams.forEach((team) => {
  let falli = generateRandomNumber(10, 50);
  let punti = generateRandomNumber(20, 90);

  const { puntiFatti, falliSubiti } = team;

  team.puntiFatti = puntiFatti + punti;
  team.falliSubiti = falliSubiti + falli;
});

const nuovoArray = [];
soccerTeams.forEach((team) => {
  let falli = generateRandomNumber(10, 50);

  const { nome, falliSubiti } = team;

  const nuovoOggetto = {
    nome: nome,
    falliSubiti: falliSubiti + falli,
  };

  nuovoArray.push(nuovoOggetto);
});

console.log(nuovoArray);
