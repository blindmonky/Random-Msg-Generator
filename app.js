const dinos = [
  {
    name: "Tyrannosaurus Rex",
    genus: "Tyrannosaurus",
    species: "T. rex",
    family: "Tyrannosauridae",
    period: "Late Cretaceous",
    type: "Theropod",
  },
  {
    name: "Triceratops",
    genus: "Triceratops",
    species: "T. horridus",
    family: "Ceratopsidae",
    period: "Late Cretaceous",
    type: "Herbivore",
  },
  {
    name: "Velociraptor",
    genus: "Velociraptor",
    species: "V. mongoliensis",
    family: "Dromaeosauridae",
    period: "Late Cretaceous",
    type: "Theropod",
  },
  {
    name: "Brachiosaurus",
    genus: "Brachiosaurus",
    species: "B. altithorax",
    family: "Sauropod",
    period: "Late Jurassic",
    type: "Herbivore",
  },
  {
    name: "Stegosaurus",
    genus: "Stegosaurus",
    species: "S. ungulatus",
    family: "Stegosauridae",
    period: "Late Jurassic",
    type: "Herbivore",
  },
  {
    name: "Spinosaurus",
    genus: "Spinosaurus",
    species: "S. aegypticus",
    family: "Spinosauridae",
    period: "Late Cretaceous",
    type: "Carnivore",
  },
  {
    name: "Ankylosaurus",
    genus: "Ankylosaurus",
    species: "A. magniventris",
    family: "Ankylosauridae",
    period: "Late Cretaceous",
    type: "Herbivore",
  },
  {
    name: "Pteranodon",
    genus: "Pteranodon",
    species: "P. longiceps",
    family: "Pterosauria",
    period: "Late Cretaceous",
    type: "Pterosaur",
  },
];

const message = document.getElementById("msg");
const btn = document.getElementById("factBtn");

function dinoFact() {
  let rando = Math.floor(Math.random() * 8);

  let msg = `Dino of the day is the ${dinos[rando].name} 
    which lived during the ${dinos[rando].period} period!`;

  message.innerHTML = msg;
}
dinoFact();
btn.addEventListener("click", dinoFact);
// for (let i of dinos) {
//   console.log(i.name);
// }

// dinos.map((dino) =>
//   console.log(`Dino of the day is ${dino.name}
// which lived during the ${dino.period}!`)
// );

// console.log(`Random number is ${rando} and Dinos has ${dinos.length} items!`);
// console.log(msg);
