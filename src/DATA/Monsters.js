const serverUrl = process.env.REACT_APP_SERVER_URL;
const Monsters = [
  {
    id: 1,
    name: "Aragog",
    img: `${serverUrl}/images/Aragog.jpeg`,
    description: "",
    potion: "",
    spell: "",

  },
  {
    id: 2,
    name: "Détraqeurs",
    img: `${serverUrl}/images/Detraqueur.jpeg`,
    description: "",
    potion: "",
    spell: ""
  },
  {
    id: 3,
    name: "Lord Voldemort",
    img: "http://hp-api.herokuapp.com/images/voldemort.jpg",
    description: "",
    potion: "",
    spell: ""
  },

];

export default Monsters;
