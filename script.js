var Question = ["What is better than Apple?<br /><br />", "What is the master race?<br /><br />", "When is it ok to call someone a towel?"]

var Answer1 = ["Any PC", "A Linux computer", "A 90s Nokia", "Pineapple on pizza", "All of the above"];

var Answer2 = ["Xbox", "PC Master Race", "PlayStation"];

var Answer3 = ["When they call you a towel", "When they are being a Towel", "Both answers are correct"];


var n = 0;
n++;
var s = 0;
s++; 

function Start1() {
    disappear1.innerHTML ="";
    message1.innerHTML = "";
    Question1.innerHTML = q[0];
    option1.innerHTML = a1[0];
    option2.innerHTML = a2[0];
    option3.innerHTML = a3[0];    
    number1.innerHTML = n++;
}
