const serverUrl = process.env.REACT_APP_SERVER_URL;
const HouseData = [
  {
    name: "Gryffindor",
    Directorname: "Minerva McGonagall",
    directorimg: "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
    logo: `${serverUrl}/images/Blason_de_Gryffondor.png`,
    patronus: "tabby cat",
    birth: "04-10-1925",
    traits: "Bravery, Nerve, Chivalry, Courage and Daring.",
  },
  {
    name: "Hufflepuff",
    Directorname: "Pomona Sprout",
    directorimg: `${serverUrl}/images/imagePomona.jpeg`,
    logo: `${serverUrl}/images/logoHUPPLEPUF.png`,
    patronus: "",
    birth: "",
    traits: "Loyalty, Kindness, Honesty  and Friendship.",
  },
  {
    name: "Ravenclaw",
    Directorname: "Filius Flitwick",
    directorimg: `${serverUrl}/images/imageFilius.jpeg`,
    logo: `${serverUrl}/images/ravenclow.png`,
    patronus: "",
    birth: "17-10-1958",
    traits: "Intelligence, Wisdom, Creativity and Originality.",
  },
  {
    name: "Slytherin",
    Directorname: "Horace Slughorn",
    directorimg: "http://hp-api.herokuapp.com/images/slughorn.JPG",
    logo: `${serverUrl}/images/logo_Slytherin.png`,
    patronus: "",
    birth: "",
    traits: "Cunning, Ambitious, Determined and Leadership.",
  },
];

export default HouseData;
