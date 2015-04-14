// ######################################################
// ### FizzBuzz exercise.                             ###
// ### Exercises from Codecademy JavaScript track.    ###
// ### http://www.codecademy.com/en/tracks/javascript ###
// ######################################################

// A function to print out a list of numbers with Fizz for every 
// number divisible by 3, Buzz for every number divisible by 5 and
// FizzBuzz for numbers divisible by both 3 and 5.

var FizzBuzz = function(count) {
    for (i = 1; i <= count; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }    
}

FizzBuzz(20);


// Function getting movie review for a given movie
var getReview = function (movie) {
    switch(movie) {
        case 'Toy Story 2': {
            return "Great story. Mean prospector.";    
        }
        case 'Finding Nemo': {
            return "Cool animation, and funny turtles.";    
        }
        case 'The Lion King': {
            return "Great songs.";    
        }
        default: {
            return "I didn't see that one.";    
        }        
    }
};

getReview('The Lion King');