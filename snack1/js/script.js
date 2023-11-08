const bikes = [
  {
    nome: "eroica",
    pesoInKg: 12,
  },
  {
    nome: "mountain dew",
    pesoInKg: 23,
  },
  {
    nome: "dr. pepper",
    pesoInKg: 15,
  },
  {
    nome: "bianchi",
    pesoInKg: 10,
  },
];

const lightestBikeWeight = Math.min(...bikes.map((bike) => bike.pesoInKg));

const lightestBikes = bikes.filter(
  (bike) => bike.pesoInKg === lightestBikeWeight
);

console.log(`Bicicletta più leggera:`);
lightestBikes.forEach((bike) => {
  console.log(`Nome: ${bike.nome}, Peso: ${bike.pesoInKg} kg`);
});
