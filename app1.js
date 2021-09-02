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

function pictures90s(){
  let pictures90 = prompt ('How many nostalgic pictures do you want to see?')
  for(let i = 0; i <parseInt (pictures90); i++){
    document.write("pictures 90 works") 
  }
}
pictures90s()
    