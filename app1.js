function getUserName(){
    let userName = prompt('What year were you born?');
    console.log(userName)
    while (parseInt(userName) <1990 || parseInt(userName) >1999) {
      userName = prompt('What year were you born?')
    }
        document.write('Welcome!')
    
} 

function getPerson(){
    var person = prompt("Please enter your name");
    
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! Are you feeling nostalgic today?";
    }
}
    
function notlying(){
    if (confirm("Press ok if you're not lying!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
    }
// control number img add 
function pictures90s(){
  let pictures90 = prompt ('How many nostalgic pictures do you want to see?')
  for(let i = 0; i <parseInt (pictures90); i++);

  while((pictures90 < 1) || (pictures90 > 5)){
    pictures90 = prompt ('Pick a number 1-5')
    let url = "1.jpg";
    document.write('<img src="' + url + '">'); 
  }
}
pictures90s()
    