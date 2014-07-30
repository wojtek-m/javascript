// ######################################################
// ### Switch exercise.                               ###
// ### Exercises from Codecademy JavaScript track.    ###
// ### http://www.codecademy.com/en/tracks/javascript ###
// ######################################################

var user = prompt("Do you like fruit?").toLowerCase();

switch(user) {
    case 'yes': {
        var eatFruit = prompt("Do you eat them every day?").toLowerCase();
        var eatBananas = prompt("Do you eat bananas?").toLowerCase();
        if (eatFruit === 'yes' && eatBananas === 'yes') {
            console.log("Great job!"); 
        } else if (eatFruit === 'yes' || eatBananas === 'yes') {
            console.log("Good!");
        } else {
            console.log("You should eat more fruits!");    
        }
        break;
    }
    case 'no': {
        var eatFruit = prompt("Do you eat them every day?").toLowerCase();
        var eatVeg = prompt("Do you like vegetables?").toLowerCase();
        if (eatFuit === 'no' && eatVeg === 'no') {
            console.log("You have to eat fruits or vegetables every day!");
        } else if (eatFruit === 'yes' && eatVeg === 'yes') {
            console.log("Great job!"); 
        } else {
            console.log("Please try to eat more fruits and vegetables!");
        }
        break;
    }
    case 'dunno': {
        console.log("How can you not know???");
        break;
    }
    default: {
        console.log("I don't think I know what you mean, please use 'yes' or 'no'."); 
        break;
    }

}