function getUserName(){
    let userName = prompt('Are you a 90s baby?');

    if(userName == 'No'){
        document.write('Go Away!')
    } else {
        document.write('Welcome!')
    }
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
