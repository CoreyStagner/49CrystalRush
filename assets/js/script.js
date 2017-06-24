// Sets initial variables for game mechanics

var value1 = Math.floor(Math.random() * 10) + 1;
var value2 = Math.floor(Math.random() * 10) + 1;
var value3 = Math.floor(Math.random() * 10) + 1;
var value4 = Math.floor(Math.random() * 10) + 1;
var goal = Math.floor(Math.random() * 100) + 50;
var score = 0;
var wins = 0;
var losses = 0;

var announcement = document.getElementById("announcement");
var gem1 = document.getElementById("gem1");
var gem2 = document.getElementById("gem2");
var gem3 = document.getElementById("gem3");
var gem4 = document.getElementById("gem4");
var collected = document.getElementById("collected");
var target = document.getElementById("target");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");


function newGame(){	
	/////////////////////////////////////////////////
	// Get Elements
	/////////////////////////////////////////////////	
		
	// Gets Elements from HTML page

	announcement = document.getElementById("announcement");
	gem1 = document.getElementById("gem1");
	gem2 = document.getElementById("gem2");
	gem3 = document.getElementById("gem3");
	gem4 = document.getElementById("gem4");
	collected = document.getElementById("collected");
	target = document.getElementById("target");


	/////////////////////////////////////////////////
	// VARIABLES
	/////////////////////////////////////////////////

	// Sets initial variables for game mechanics

	value1 = Math.floor(Math.random() * 12) + 1;
	value2 = Math.floor(Math.random() * 12) + 1;
	value3 = Math.floor(Math.random() * 12) + 1;
	value4 = Math.floor(Math.random() * 12) + 1;
	goal = Math.floor(Math.random() * 101) + 19;
	score = 0;


	console.log(value1);
	console.log(value2);
	console.log(value3);
	console.log(value4);

	updateScreen();
	/////////////////////////////////////////////////
	// Functions
	/////////////////////////////////////////////////
}

function updateScreen(){
	$("#target").text(goal);
	$("#collected").text(score);
	$("#wins").text(wins)
}

function win(){
	updateScreen();
	var rematch = confirm("You made your goal!!");
	if(rematch = true){
		newGame();
	};
}

function lose(){
	updateScreen();
	var rematch = confirm("YOU THIEF!! I told you not to go over what you were allowed to dig for.");
	if(rematch = true){
		newGame();
	}
}

function progress(){
	updateScreen();
	if(goal > score){
		
	}
	else if(goal === score){
		win();	
	}
	else if(goal < score){
		lose();
	}
}

/////////////////////////////////////////////////
// Events
/////////////////////////////////////////////////

$(document).ready(function(){
	$("#gem1").on("click", function(){
		console.log("You just clicked Gem1")
		score += value1;
		console.log(score)
		updateScreen();
		progress();
	});

	$("#gem2").on("click", function(){
		console.log("You just clicked Gem2")
		score += value2;
		console.log(score)
		updateScreen();
		progress();
	});

	$("#gem3").on("click", function(){
		console.log("You just clicked Gem3")
		score += value3;
		console.log(score)
		updateScreen();
		progress();
	});

	$("#gem4").on("click", function(){
		console.log("You just clicked Gem4")
		score += value4;
		console.log(score)
		updateScreen();
		progress();
	});
})
	

	/////////////////////////////////////////////////
	// Set Elements
	/////////////////////////////////////////////////