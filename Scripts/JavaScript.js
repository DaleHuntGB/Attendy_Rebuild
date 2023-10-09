var Usernames = ["Dale", "Artemi", "Beck", "Bob", "Emma"];
var RandomizeIndex = Math.floor(Math.random() * Usernames.length);
var RandomName = Usernames[RandomizeIndex];
document.querySelector("#Username").textContent = RandomName;
