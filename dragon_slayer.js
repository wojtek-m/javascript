// ######################################################
// ### Dragon slaying game exercise.                  ###
// ### Exercises from Codecademy JavaScript track.    ###
// ### http://www.codecademy.com/en/tracks/javascript ###
// ######################################################

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if (youHit) {
        console.log("Great, you hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("Victory, you slew the dragon!");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("You have been incinerated by the dragon...");
    }
    slaying = false;    
}