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
const UsernameLocation = document.querySelector("#Username");

if (UsernameLocation !== null) {
  UsernameLocation.textContent = RandomName;
}

function ToggleModules() {
  const ModuleContainer_Content = this.querySelector(".ModuleContainer_Content");
  if (ModuleContainer_Content.style.display === "none") {
    ModuleContainer_Content.style.display = "block";
  } else {
    ModuleContainer_Content.style.display = "none";
  }
}

const ModuleContainers = document.querySelectorAll(".ModuleContainer");

for (i = 0; i <= ModuleContainers.length; i++) {
  if (ModuleContainers[i] !== undefined) {
  ModuleContainers[i].addEventListener("click", ToggleModules);
  ModuleContainers[i].querySelector(".ModuleContainer_Content").style.display ="none";
  }
}
