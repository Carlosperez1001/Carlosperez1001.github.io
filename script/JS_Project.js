//JS Project
var key;
var scoreK = 0;
var attempts= 2;

  // Project 1 - Name Iput - 
function Nameinput() {
var name = document.getElementById('Name');
alert("Hello " + name.value);
document.getElementById("UserName").innerHTML = "Name: " + name.value;
}
  // Project 1 - MathGame - 
function RandomMGStart(){
	MGStartBTN.style.visibility = "hidden";
	var num1 = Math.floor((Math.random() * 9) + 1);
	document.getElementById("num1LB").innerHTML= num1;
	var num2 = Math.floor((Math.random() * 9) + 1);
	document.getElementById("num2LB").innerHTML= num2;
	var OP =Math.floor((Math.random("OPLB") * 5) + 1);
	switch (OP){
		case 1:
		OP = "+";
		 key = num1 + num2;
		break;
		case 2:
		OP = "-";
		 key = num1 - num2;
		break;
		case 3:
		OP = "*";
		 key = num1 * num2;
		break;
		case 4:
		OP = "/";
		 key = num1 / num2;
		break;
		case 5:
		OP = "%";
		 key = num1 % num2;
		break;
	}
	document.getElementById("OPLB").innerHTML= OP;
	console.log(key);
}
  // Project 2 CONT. Chech input/attempts left  
function SubmitRMG(){
	var input = document.getElementById('InputRMG').value;
	if (input == key){
	scoreK += 1;
	attempts= 2;
	RandomMGStart();
	}else{
	attempts -=1;
}
if (attempts < 1){
	RandomMGStart();
	attempts= 2;
}
	document.getElementById("scoreLB").innerHTML="Score: " + scoreK;
	document.getElementById("attemptsLB").innerHTML="Attempts left: " + attempts;
}
  // Project 3 - Bubble sort - 
function BubbleSortStart(){
	var BubbleSortList = document.getElementById("BubbleSortIP").value;
	var Splitter = BubbleSortList.split(" ");

for (var i = 0; i<Splitter.length-1; i++){
	for (var x = 0; x<Splitter.length-1; x++){
		if(parseInt(Splitter[x]) > parseInt(Splitter[x+1])){
		var temp = Splitter[x];
		Splitter[x] = Splitter[x+1];
		Splitter[x+1] = temp;
	}}}
document.getElementById("BubbleSortLB").innerHTML="( "+Splitter+" )";
}

  // Project 4 -  RPS Game- 
    // Input 
function RPSStartRock(){
	var RPSInput = document.getElementById('RPSBTNRock').value;
	RPS(RPSInput);}
function RPSStartPaper(){
	var RPSInput = document.getElementById('RPSBTNPaper').value;
	RPS(RPSInput);}
function RPSStartScissor(){
	var RPSInput = document.getElementById('RPSBTNScissor').value;
	RPS(RPSInput);}
	
var P1layer_Score =0;
var Computer_Score =0;

function RPS(Input){
	var RPSCOM = Math.floor(Math.random() * 3);	
	switch (RPSCOM){
		case 0:
		RPSCOM = "Rock";
		break;
		case 1:
		RPSCOM = "Paper";
		break;
		case 2:
		RPSCOM = "Scissor";
		break;
	}
	document.getElementById("RPSInput").innerHTML=Input.fontsize(2);
	document.getElementById("VS").innerHTML="VS.";
	document.getElementById("RPSComputer").innerHTML=RPSCOM.fontsize(2);
	
	  // Possible the worst way to do this....
	if (Input=="Paper" && RPSCOM=="Rock"){
		document.getElementById("RPSInput").innerHTML=Input.fontsize(8);
		document.getElementById("RPSInput").innerHTML=Input.fontcolor("green");
		Player_Score+=1
		}
	if (Input=="Rock" && RPSCOM=="Paper"){
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontsize(8);
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontcolor("green");
		Computer_Score+=1
		}
	if (Input=="Rock" && RPSCOM=="Scissor"){
		document.getElementById("RPSInput").innerHTML=Input.fontsize(8);
		document.getElementById("RPSInput").innerHTML=Input.fontcolor("green");
		Player_Score+=1
	}
	if(Input=="Scissor" && RPSCOM=="Rock"){
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontsize(8);
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontcolor("green");
		Computer_Score+=1
	}
	
	if (Input=="Scissor" && RPSCOM=="Paper"){
		document.getElementById("RPSInput").innerHTML=Input.fontsize(8);
		document.getElementById("RPSInput").innerHTML=Input.fontcolor("green");
		Player_Score+=1
	}
	if(Input=="Paper" && RPSCOM=="Scissor"){
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontsize(8);
		document.getElementById("RPSComputer").innerHTML=RPSCOM.fontcolor("green");
		Computer_Score+=1
	}
		document.getElementById("Player").innerHTML="Player";
		document.getElementById("Computer").innerHTML="Computer";
		document.getElementById("Player_ScoreLB").innerHTML="Player's Score " +Player_Score ;
		document.getElementById("Computer_ScoreLB").innerHTML="Computer's Score "+ Computer_Score;
}
 
