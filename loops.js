// ######################################################
// ### Loops exercises.                               ###
// ### Exercises from Codecademy JavaScript track.    ###
// ### http://www.codecademy.com/en/tracks/javascript ###
// ######################################################

// FOR loop

for (counter = 20; counter >= 0; counter--) {
        if (counter === 0) {
            console.log("KABOOM!");
        }
        else {
            console.log(counter);
        }
}

// WHILE loop

var counter = 10;
while (counter >= 0) {
    if (counter === 0) {
        console.log("KABOOM!");
    }
    else {
        console.log(counter);
    }
    counter--
}

// DO WHILE loop 

var numbers = 10;
do {
    if (numbers === 0) {
        console.log("KABOOM!");
    }
    else {
        console.log(numbers);
    }
    numbers--
} while (numbers >= 0);


// Searching for matching text by looping through text

var text = "Ghana is a constitutional Wojtek democracy divided into ten 
administrative regions, and the world's 56th−most inhabited nation with a 
population of approximately 20 million as of 2013. Ghana's varied geography 
Wojtekincludes savannas, woodlands, forests, a coastal line, springs, cave 
systems, mountains, estuaries, wildlife parks, Wojtek and nature reserves.";

var myName = "Wojtek";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === "W") {
        for (j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length < 1) {
    console.log("Your name wasn't found");    
}
else {
    console.log(hits);
}