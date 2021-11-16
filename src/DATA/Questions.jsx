const Questions = [
  {
    ref: 1,
    type: "spells",
    question: "What is the spell that can make you disappear?",
    correct_answer: "Evanesco",
    incorrect_answers: ["Deprimo", "Dunamis", "Episkey"]
  },
  {
    ref: 1,
    type: "spells",
    question: "What is the spell that can make you jump very high?",
    correct_answer: "Elasticus",
    incorrect_answers: ["Flambios", "Expulso", "Confundo"]
  },
  {
    ref: 2,
    type: "spells",
    question: "What is the spell that can unlock doors and windows?",
    correct_answer: "Alohomora",
    incorrect_answers: ["Bloclang", "Duro", "Furunculus"]
  },
  {
    ref: 2,
    type: "spells",
    question: "What is the spell that can erase memories from a mind?",
    correct_answer: "Obliviate",
    incorrect_answers: ["Sonorus", "Glisseo", "Endoloris"]
  },
  {
    ref: 3,
    type: "spells",
    question: "What is the spell that can slice something?",
    correct_answer: "Diffindo",
    incorrect_answers: ["Gemino", "Homenum revelio", "Lumos"]
  },
  {
    ref: 3,
    type: "spells",
    question: "What is the spell that can cancel any spell?",
    correct_answer: "Finite Incantatem",
    incorrect_answers: ["Mobilicorpus", "Destructum", "Bloclang"]
  },
  {
    ref: 4,
    type: "spells",
    question: "What is the spell that can duplicate any object?",
    correct_answer: "Gemino",
    incorrect_answers: ["Levicorpus", "Impedimenta", "Nox"]
  },
  {
    ref: 4,
    type: "spells",
    question: "What is the spell that can give energy to someone?",
    correct_answer: "Revigor",
    incorrect_answers: ["Confringo", "Silencio", "Engorgio"]
  },
  {
    ref: 5,
    type: "spells",
    question:
      "What is the spell that can clean everything (blood, dust, etc...) ?",
    correct_answer: "Tergeo",
    incorrect_answers: ["Waddiwasi", "Obscuro", "Protego"]
  },
  {
    ref: 5,
    type: "spells",
    question: "What is the spell that can make levitate any object?",
    correct_answer: "Wingardium Leviosa",
    incorrect_answers: ["Legilimens", "Descendo", "Aparecium"]
  },
  {
    ref: 6,
    type: "spells",
    question: "What is the spell that can transform an object into a portkey?",
    correct_answer: "Portus",
    incorrect_answers: ["Enervatum", "Defodio", "Anapneo"]
  },
  {
    ref: 6,
    type: "spells",
    question: "What is the spell that can prevent a movement from an opponent?",
    correct_answer: "Stupefix",
    incorrect_answers: ["Protego horribillis", "Impervius", "Liberacorpus"]
  },
  {
    ref: 1,
    type: "potions",
    question: "What is the potion to get rid of the acne?",
    correct_answer: "Blemish Blitzer",
    incorrect_answers: [
      "Bruise removal paste",
      "Jawbind Potion",
      "Quodpot solution"
    ]
  },
  {
    ref: 1,
    type: "potions",
    question: "What is the potion to clean everything?",
    correct_answer: "Everklena",
    incorrect_answers: [
      "Weedosoros",
      "Polyjuice Potion",
      "Gregory's Unctuous Unction"
    ]
  },
  {
    ref: 2,
    type: "potions",
    question: "What is the potion to create obsession for someone?",
    correct_answer: "Amortentia",
    incorrect_answers: ["Hate Potion", "Death potion", "Rano Potion"]
  },
  {
    ref: 2,
    type: "potions",
    question: "What is the potion to alter the voice of someone?",
    correct_answer: "Volubilis Potion",
    incorrect_answers: [
      "Jawbind Potion",
      "Everlasting Elixirs",
      "Beguiling Bubbles"
    ]
  },
  {
    ref: 3,
    type: "potions",
    question: "What is the potion to give luck?",
    correct_answer: "Felix Felicis",
    incorrect_answers: [
      "Invigoration Draught",
      "Cure for Boils",
      "Sleeping Draught"
    ]
  },
  {
    ref: 3,
    type: "potions",
    question: "What is the potion to restore the drinker's sight?",
    correct_answer: "Oculus Potion",
    incorrect_answers: ["Girding Potion", "Polyjuice Potion", "Cough Potion"]
  },
  {
    ref: 4,
    type: "potions",
    question: "What is the potion to turn the drinker's head into a pumpkin?",
    correct_answer: "Pompion Potion",
    incorrect_answers: [
      "Noxious Potion",
      "Malevolent Mixture",
      "Laxative Potion"
    ]
  },
  {
    ref: 4,
    type: "potions",
    question: "What is the potion to warm up?",
    correct_answer: "Pepperup Potion",
    incorrect_answers: [
      "Hiccoughing Solution",
      "Memory Potion",
      "Thick golden potion"
    ]
  },
  {
    ref: 5,
    type: "potions",
    question: "What is the potion to get an energy boost?",
    correct_answer: "Invigoration Draught",
    incorrect_answers: ["Fatiguing Infusion", "Rat tonic", "Veritaserum"]
  },
  {
    ref: 5,
    type: "potions",
    question: "What is the potion to have an hysterical laugh?",
    correct_answer: "Alihotsy Draught",
    incorrect_answers: [
      "Armadillo Bile Mixture",
      "Blemish Blitzer",
      "Wiggenweld Potion"
    ]
  },
  {
    ref: 6,
    type: "potions",
    question: "What is the potion to make the taker's eyes swell?",
    correct_answer: "Bulgeye Potion",
    incorrect_answers: ["Everlasting Elixirs", "Jawbind Potion", "Rano Potion"]
  },
  {
    ref: 6,
    type: "potions",
    question: "What is the potion to force someone to tell the truth?",
    correct_answer: "Veritaserum",
    incorrect_answers: [
      "Girding Potion",
      "Cheese-Based Potions",
      "Baneberry Potion"
    ]
  },
  {
    ref: 25,
    type: "Fight",
    question: "What are the three Unforgivable Curses?",
    correct_answer: "Avada Kedavra, Crucio and Imperio",
    incorrect_answers: [
      "Aguamenti, Accio and Alarte Ascendare",
      "Expelliarmus, Expecto Patronum and Diffindo",
      "Impedimenta, Incarcerous and Incendio"
    ]
  },
  {
    ref: 26,
    type: "Fight",
    question: "What dragon had Harry Potter during the Triwizard Tournament?",
    correct_answer: "Hungarian Horntail",
    incorrect_answers: [
      "Norwegian Ridgeback",
      "Antipodean Opaleye",
      "Peruvian Vipertooth"
    ]
  },
  {
    ref: 27,
    type: "monstre",
    question: "What kind of creature is Norbert, Hagrid's (hidden) pet?",
    correct_answer: "Dragon",
    incorrect_answers: [
      "Goose",
      "Centaur",
      "Eagle"
    ]
  },
  {
    ref: 28,
    type: "monstre",
    question: "A hippogriff is part horse and part what other animal?",
    correct_answer: "Eagle",
    incorrect_answers: [
      "Fox",
      "Rabbit",
      "Lion"
    ]
  },
  {
    ref: 29,
    type: "Fight",
    question: "Who was Tom Marvolo Riddle?",
    correct_answer: "Voldemort",
    incorrect_answers: [
      "The best friend of Albus Dumbledore",
      "The ghost of Sirius Black",
      "Harry's father"
    ]
  },
  {
    ref: 30,
    type: "Fight",
    question: "Who killed Albus Dumbledore?",
    correct_answer: "Serverus Snape",
    incorrect_answers: ["Harry Potter", "Voldemort", "Drago Malefoy"]
  }
];

export default Questions;
