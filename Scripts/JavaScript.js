var Usernames = [
  "Dale",
  "Artemi",
  "Beck",
  "Bob",
  "Emma",
  "Gina",
  "Henry",
  "Isaac",
  "Jasmine",
  "Kai",
];

var RandomizeIndex = Math.floor(Math.random() * Usernames.length);
var RandomName = Usernames[RandomizeIndex];
document.querySelector("#Username").textContent = RandomName;
