var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! Are you feeling nostalgic today?";
}
person()