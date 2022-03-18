const personnages = {
  spider_man: {
    nom_hero: "Spider-Man",

    nom_civil: "Peter Benjamin PARKER",

    team: ["STARK INDUSTRIES", "AVENGERS"],

    pouvoirs: [
      "Force",
      "Endurance",
      "Agilité",
      "Facteur guérisseur",

      "Peut s'accrocher sur n'importe quelle surface (Doté de poils microscopiques sur ses mains et ses pieds qui lui permettent d'adhérer aux surfaces.)",
      "Précognition (« sens d'araignée » / réflexes surhumains)",
    ],

    description:
      "Personnage principal du jeu. Élevé par son oncle Ben et sa tante May, c’est à l’âge de 15 ans que le lycéen Peter Parker s’est fait mordre par une araignée radioactive qui lui a donné des pouvoirs d’une araignée. Guidé par les derniers mots de son oncle Ben : « Un grand pouvoir implique de grandes responsabilité », il devient le justicier connu sous le nom de Spider-Man mettant ses pouvoirs au service du bien. Après 8 ans d'activité, il est devenu un justicier expérimenté. ",

    img: "Spider-Man.jpg",
  },
  thor: {
    nom_hero: "Thor",

    nom_civil: "Thor Odisson",

    team: "Avengers",

    pouvoirs: [
      "Force colossale et inégalée",
      "ceinture magique appelée meginqjord",
      "Il possède un marteau de guerre à manche court appelé mjöllnir",
      "ce marteau crée également les éclairs",
    ],
    description:
      "Thor est le fil du roi des Asgardiens Odin et de la déesse de la terre Gaea. Il est élevé par sa mère adoptive Frigga, l’épouse d’Odin." +
      "Au cours de son enfance, Thor apprend à être un guerrier et grandit en popularité parmi son peuple. Son père fait construire le marteau Mjöllnir pour lui.",

    img: "Thor.jpg",
  },
  ironman: {
    nom_hero: "Iron Man",

    nom_civil: "Tony Stark",

    team: ["avengers", "SHIELD"],

    pouvoirs:
      "Avec l'armure, Iron Man peut voler à grande vitesse possède une force incroyable : il peut facilement soulever ou exercer une pression équivalente à 100 tonnes, et jusqu'à plus de 400 avec l'armure Hulkbuster ; lorsqu'il revêt son armure, il devient l'un des personnages les plus puissants de l'univers Marvel.",

    description:
      "Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis.",

    img: "iron.jpg",
  },
  Captain: {
    nom_hero: "Captain America",
    nom_civil: "Steven « Steve » Rogers",
    team: ["Avengers", "illuminati"],
    pouvoirs: [
      "hyper fort",
      "hyper rapide",
      "hyper endurant",
      "mémoire infaillible",
      "bouclier boomerang",
    ],
    description:
      "Après avoir avalé le sérum du super-soldat durant la Seconde Guerre mondiale, Steven Rogers est devenu un super-héros sous le nom de Captain America. Il rejoindra plus tard les Avengers. Rejeté du service militaire à cause de sa mince carrure et de ses problèmes de santé, Steven Rogers est transformé en super-soldat pour les besoins d'un programme révolutionnaire, afin d'affronter une organisation scientifique secrète nazie et libérer les prisonniers de guerre du camp des Alliés.",
    img: "Captain-America.jpg",
  },
};

const teams = {
  Justicier: {
    nom: "La Ligue des justiciers",
    membres: [
      "Batman",
      "Superman",
      "Wonder Woman",
      "Flash",
      "Green Lantern",
      "Aquaman",
      "Green Arrow",
    ],
    description:
      "Ces justiciers luttent contre les différents dangers (invasions extra-terrestres, savants fous, mégalomanes…) qui menacent la quiétude de la Terre. ",
    img: "ligue_justicier.jpg",
    logo: "LJ-Logo.jpg",
  },
  hydra: {
    nom: "hydra",
    membres: [
      "Arnim Zola",
      "Baron Strucker",
      "Vipère",
      "Le Caïd",
      "Silvermane",
      "Crâne Rouge",
      "Crossbones",
    ],
    description:
      "L'HYDRA est une organisation terroriste,le but de cette organisation est la domination mondiale et la propagation d'une idéologie fascisante. Elle est souvent combattue par sa némésis, l’organisation américaine de contre-espionnage le SHIELD, et est également un adversaire récurrent du héros Captain America.",
    img: "hydra.jpg",
    logo: "hydralogo.jpg",
  },
  avengers: {
    nom: "Avengers",
    membres: [
      "Iron Man Tony Stark",
      "Captain America alias Steven Rogers",
      "Thor Odinson",
      "Hulk alias Bruce Banner",
      "La Veuve Noire alias Black Widow",
      "Hawkeye alias Clint Barton.",
    ],
    description:
      "Iron Man, Captain America, Thor, Hulk, Clint Barton et Natasha Romanoff doivent tenter de travailler en équipe afin d'empêcher le frère adoptif de Thor, Loki, d'envahir la Terre.",
    img: "avengers.jpg",
    logo: "avengerslogo.jpg",
  },
};
