// // let adresse ;
// // let age = 30;
// // console.log(age);
// // age = 35;
// // console.log(age);
// // console.log("Mon age est : "+age); // affichage soigné

// let prenom = "Pascaline";
// let age = 35;
// console.log("Je m'appelle "+prenom+" et j'ai "+age+ " ans");
// console.log("Mon prénom est composé de "+prenom.length+ " caractères");
// // nom en maj
// console.log(`Mon prénom en majuscule : ${prenom.toUpperCase()}`);
// // nom en min
// console.log(`Mon prénom en minuscule : ${prenom.toLowerCase()}`);
// // extrait une sous chaine, les index de 0 à 4 ==> 4 caract
// console.log(`Sous chaine : ${prenom.substring(0,4)}`);
// console.log("Mon prénom en majuscule : "+prenom.toUpperCase());
// // nom en min
// console.log("Mon prénom en minuscule : "+prenom.toLowerCase());
// // extrait une sous chaine, les index de 0 à 4 ==> 4 caract
// console.log("Sous chaine : "+prenom.substring(0,4));

// // prend les 4 caract et les transforme en maj
// console.log(`Sous chaine : ${prenom.substring(0,4).toUpperCase()}`);
// // decoupe la chaine en caractères
// console.log(prenom.split(''));
// let nomComplet = "Pascaline Lefebvre";
// console.log(nomComplet.split(' '));
// console.log("Bonjour, je m'appelle "+nomComplet+ " et mon nom entier comporte " +nomComplet.length+ " caractères.")

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// console.log(fruits[0]);
// console.log(fruits[3]); // acces au 4eme element
// fruits.unshift("fraise");
// fruits.push("banane"); // ajout en fin de tableau
// fruits.shift(); // supprimer le 1er element
// fruits.pop(); // supprimer le dernier element
// console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange
// console.log(Array.isArray(fruits)); // true

// let tab1 = [1, 2, 3, 4, 5];
// let colors = ["bleu", "rouge", "jaune", "vert", "rose"];
// console.log(colors[1]);
// colors.unshift("violet");
// console.log(colors);
// console.table(colors);
// colors.shift();
// console.log(colors.indexOf("jaune"));
// colors[0] = "turquoise";
// console.table(colors);
// console.log(colors[2].toUpperCase(), colors[0].toUpperCase());

// const personne = {
//     prenom: "Julien",
//     nom: "La garde",
//     age: 30,
//     passions: ["foot", "natation", "jeux videos"],
//     adresse : {
//     rue : "rue Nationale",
//     ville : "Lille",
//     codePostal : "59000",
//     pays : "France"
//     }
//    };

//    // afficher un objet
// console.log(personne);
// console.log(personne.prenom); // acces au prenom
// console.log(personne.age);
// console.log(personne.passions[0]); // acces au 1er element des passions
// console.log(personne.adresse.rue); // acces a la rue (qui est lui meme un attribut de l'objet adresse')
// console.log(personne.adresse.codePostal);
// personne.prenom="Julie";
// console.log(personne.prenom);
// personne.email="julie@example.com";
// console.log(personne);

// const Pascaline = {
//     prenom: "Pascaline",
//     nom: "Lefebvre",
//     age: 35,
//     passions: ["piano", "musique", "lecture"],
//     adresse: {
//         rue: "rue edouard vaillant",
//         codePostal: 59260,
//         ville: "Hellemmes",
//         pays: "France"
//             }
// }

// console.log(Pascaline.prenom+" est âgée de "+Pascaline.age+" ans, elle habite à "+Pascaline.adresse.ville+".")

// Pascaline.passions.push("Balades");

// console.log(Pascaline);
// Pascaline.adresse={
//     rue: "avenue Robert Schuman",
//     codePostal: "59370",
//     ville: "Mons en Baroeul",
//     pays: "Belgique",
// }
// console.log(Pascaline);

//    console.log(todos);
//    console.log(todos[0].text);

// todos.push=
//   {id: 5,
//     text: "Ranger le bureau",
//     isCompleted: true,
//     }

// let tache=
// {id: 5,
// text: "Ranger le bureau",
// isCompleted: true,
// };

// console.log(todos[todos.length-1].id+1);
// console.log(todos[1].text);

// const x = 5;
// const y = 16;
// if (x < y) text = "x est inférieur à y";

// if (x < y) {
//     text = "x est inférieur à y";
//   } else if (x == y) {
//     text = " x est égal à y";
//   } else {
//     text = " x est supérieur à y";
//   }
//   document.getElementById("demo").innerHTML = text;

// let performance = 90;
// let prime = 0;

// if (performance >= 90) {
//     prime = 20;
// } else if (performance >= 80) {
//     prime = 15;
// } else if (performance >=70) {
//     prime = 10;
// } else {prime = 0};
// document.getElementById("demo").innerHTML = "Avec une performance de "+performance+", votre prime est de "+prime+".";

// let age = 8;
// let type = ""

// if (0<=age && age<2) {
//     type = "nourisson";
// }
// else if (2<=age && age<10) {
//     type = "enfant";
// }
// else if (10<=age && age<18) {
//     type = "ado";
// }
// else {type = "majeur"};
// document.getElementById("demo").innerHTML = "Il a "+age+" ans, c'est un "+type+".";

// const x = 12
// const message = x > 10 ? "commande permise" : "commande non permise";
// console.log(message);

// const age = 12
// const messageB = age<18 ? "il est mineur" : "il est majeur";
// console.log(messageB) ;

// let txt1 = "how're you today ?";
// let txt2 = "welcome to HTML";
// let messageC = txt1.length>txt2.length ? "txt1 est plus grand que txt2" : "txt2 est plus grand que txt1";
// console.log(messageC);

// let txt3 = "how're you today ?";
// let txt4 = "welcome to HTML";
// let messageD = txt3.split('').length>txt4.split('').length ? "txt3 est plus grand que txt4" : "txt4 est plus grand que txt3";
// console.log(messageD);

// const age = 10;
// switch(age) {
//     case 18:
//         console.log ("majeur");
//         break;
//     case 60:
//         console.log ("retraité");
//         break;
//     default:
//         console.log ("autres");
//    }

//    switch (true) {
//     case age >= 0 && age <= 12:
//     console.log("enfant");
//     break;
//     case age >= 13 && age < 18:
//     console.log("adolescent");
//     break;
//     case age >= 18:
//     console.log("majeur");
//     break;
//     default:
//     console.log("erreur");
//    }

//    const grade = "junior";
//    switch(grade) {
//         case "junior":
//             console.log(1800);
//             break;
//         case "confirmé":
//             console.log(2500);
//             break;
//         case "senior":
//             console.log(3200);
//             break;
//         default:
//             console.log("erreur");
//    }

//    let grade1 = "junior"
//    let salaire1 = 0
//    switch(grade1){
//         case "junior":
//             salaire1 = 1800;
//             break;
//         case "confirmé":
//             salaire1 = 2500;
//             break;
//         case "senior":
//             salaire1 = 3200;
//             break;
//         default:
//             salaire1 = erreur
//    }
//    console.log(salaire1)

//    prompt("Indiquer votre grade");

//    let nbRoue = parseInt(prompt("Combien y a-t-il de roues ?"))
//    console.log(nbRoue)
//    let vehicule = ""
//    switch (nbRoue) {
//             case 2:
//                 vehicule = "moto";
//                 break;
//             case 4:
//                 vehicule = "voiture";
//                 break;
//             case 6:
//                 vehicule = "camion";
//                 break;
//             default:
//                 vehicule = 'autre'
//        }
// console.log(vehicule)

// const d = new Date();
// console.log(d);

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "dimanche";
//     break;
//   case 1:
//     day = "lundi";
//     break;
//   case 2:
//     day = "mardi";
//     break;
//   case 3:
//     day = "mercredi";
//     break;
//   case 4:
//     day = "jeudi";
//     break;
//   case 5:
//     day = "vendredi";
//     break;
//   case 6:
//     day = "samedi";
//     break;
//   default:
//     day = "autre";
// }
// console.log(day);

// document.write("i stocke la valeur x lors du passage n° XX dans la boucle<br>")

// alert()

// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   }
// document.write(text)

// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
// let text = "";
// let i = 0;
// while (i < cars.length) {
//     text += "<br>la voiture est" + cars[i];
//   i++;
// }
// document.write(text)

// let test1 = [1, 6, 2, 5];
// let somme = 0;
// for (let i = 0; i < test1.length; i++) {
//     somme += test1[i];
//     document.write(somme)
// }

// const todos = [
//     {
//       id: 1,
//       text: "Faire les courses",
//       isCompleted: true,
//     },
//     {
//       id: 2,
//       text: "Balade au vieux Lille",
//       isCompleted: true,
//     },
//     {
//       id: 3,
//       text: "Préparer le diner",
//       isCompleted: false,
//     },
//     {
//       id: 4,
//       text: "Regarder la TV",
//       isCompleted: false,
//     },
//   ];

// let result = "";
// for (let i = 0; i < todos.length; i++) {
// if (todos[i].isCompleted== true ) {
//     result += "la tache est complétée";
// }
// else  {
//     result += "la tache est non completee";
// }
// result += "<br>"
// }
// document.write(result)

//   const todos = [
//     {
//       id: 1,
//       text: "Faire les courses",
//       isCompleted: true,
//     },
//     {
//       id: 2,
//       text: "Balade au vieux Lille",
//       isCompleted: true,
//     },
//     {
//       id: 3,
//       text: "Préparer le diner",
//       isCompleted: false,
//     },
//     {
//       id: 4,
//       text: "Regarder la TV",
//       isCompleted: false,
//     },
//   ];

//   let result = "";
//   let i = 0;
//   while (i < todos.length) {
//     if (todos[i].isCompleted == true) {
//       result += "la tache est complétée <br>";
//     } else {
//       result += "la tache est non completee <br>";
//     }
//     i++;
//   }
//   document.write(result);

// let tache = "";
// for (let i = 0; i < todos.length; i++) {
// //     tache += todos[i].text + "<br>";
// // }
// // document.write(tache)

// tache += todos[i].isCompleted ? "tache complétée" : "tache non complétée";
// tache += "<br>"
// }
// document.write(tache)

//   let phrase = "";
//   for (let i = 0; i < todos.length; i++) {
//       phrase += "La tache d'ID " + todos[i].id + " est " + todos[i].text + " et elle contient " + todos[i].text.length + " caractères et est ";
//       if (todos[i].isCompleted== true ) {
//           phrase += "complétée.";
//       }
//       else  {
//           phrase += " non completée.";
//       }
//       phrase += "<br>"
//     }
//   document.write(phrase)

// const todos = [
//   {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//   },
// ];
// todos.forEach(function (todo) {
//   document.write(todo.text + "<br>");
// });

// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
// cars.forEach(function (car) {
//     document.write(car + "<br>");
//   });

// let todos = [1, 6, 2, 5];
// const listeTodo=todos.map(function (todo) {
//     return todo*2;
//     });
//   document.write(listeTodo);

//   let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
// const listevoiture=cars.map(function (car) {
//     return car.length;
//     });
//   document.write(listevoiture);

// function affichageDate() {
//     const date = new Date();
//     document.write(
//     `aujourd'hui il est le ${date.getDate()}/${
//    date.getMonth()+1}/${date.getFullYear()}`
//     );
//    }
//    affichageDate();

// let x = 5
// let y = 4
// let z = 6
//    function produit(p1, p2, p3) {
//     return p1 * p2 * p3;
//   }
//   document.write(produit(y, x, z));

// let text = "Je suis une chaine de caractère"
// function caractère(textt) {
// return textt.length;
// }
// document.write(caractère(text));

// let y = 2
// function produit(yy) {
//     return yy*60
// }
// document.write(produit(y));

// let index = 3
// let premier = ["1", "2", "3", "4"]
// function find(premierr, indexx) {
// return premierr[indexx]
// }
// document.write(find(premier,index));

// let premier = ["1", "2", "3", "4"]
// function RandomElement(premierr) {
// return premierr
// }
// document.write(RandomElement(premier));

// let montableau = ['1', '2', '3', '4', '5'];
// function valeur(montableauu) {
// return montableauu[Math.floor(Math.random()*montableauu.length)];
// }
// document.write(valeur(montableau));

// let a = 1, b = 3, c = 5;
// function tableau(aa, bb, cc) {
//     return Math.max(aa, bb, cc)
// }
// document.write(tableau(a, b, c));

// test

// const somme = (a , b) =>
//      a+b;
// document.write(somme(2,2));

// const produit = (a , b) =>
//      a*b
// document.write(produit(5,2));

// const division = (a , b) =>
//     a/b
// document.write(division(5,2));

// const soustraction = (a, b) => 
//        a-b;
// document.write(soustraction(5, 2));

let a = 5
let b = 2
let op = "*";
const calculatrice = (a, b, op) =>
a, b, op;
document.write(calculatrice(5, 2, op));

