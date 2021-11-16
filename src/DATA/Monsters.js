const serverUrl = process.env.REACT_APP_SERVER_URL;
const Monsters = [
  {
    id: 1,
    name: "Aragog",
    img: `${serverUrl}/images/Aragog.jpeg`,
    description: "",
    potion: "Ageing Potion",
    spell: "Aberto",

  },
  {
    id: 2,
    name: "Détraqeurs",
    img: `${serverUrl}/images/Detraqueur.jpeg`,
    description: "",
    potion: "Alihotsy Draught",
    spell: "Accio"
  },
  {
    id: 3,
    name: "Lord Voldemort",
    img: "http://hp-api.herokuapp.com/images/voldemort.jpg",
    description: "",
    potion: "Amortentia",
    spell: "Age Line"
  },

];

export default Monsters;
