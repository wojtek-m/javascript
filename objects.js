// ######################################################
// ### Objects exercise.                              ###
// ### Exercises from Codecademy JavaScript track.    ###
// ### http://www.codecademy.com/en/tracks/javascript ###
// ######################################################

var friends = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Connelly",
    number: "775-3333-444",
    address: ['Whitechurch Abbey', 'Rathfarnham', 'DU', '00014']
}

friends.steve = {
    firstName: "Steve",
    lastName: "Barbossa",
    number: "888-2344-222",
    address: ['Whitechurch Lane', 'Cabinteely', 'DU', '00018']
}

var list = function(par) {
    for (var key in par) {
        console.log(key);
    }
    
}

var search = function(name) {
     for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }   
}