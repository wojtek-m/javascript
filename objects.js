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


// Rectangle Object and methods
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
    return (this.height * 2) + (this.width * 2)
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();




// Arrays of objects and accessing property values

// person constructor
var Person = function(name,age) {
this.name = name;
this.age = age;
};

// array of people
var family = new Array();

// set array elements
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through the array to access names
for (i = 0; i < family.length; i++) {
    console.log(family[i].name);    
}