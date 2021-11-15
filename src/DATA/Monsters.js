const serverUrl = process.env.REACT_APP_SERVER_URL;
const Monsters = [
  {
    id: 1,
    name: "Aragog",
    img: `${serverUrl}/images/Aragog.jpeg`,
    description: "",

  },
  {
    id: 2,
    name: "Détraqeurs",
    img: `${serverUrl}/images/Detraqueur.jpeg`,
    description: "",
  },
  {
    id: 3,
    name: "Lord Voldemort",
    img: "http://hp-api.herokuapp.com/images/voldemort.jpg",
    description: "",
  },

];

export default Monsters;
