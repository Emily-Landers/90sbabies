var person = prompt("Please enter your name", "John Smith");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
person()