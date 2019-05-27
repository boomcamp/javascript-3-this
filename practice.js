//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
        // Means the owner of the function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
        // 1- Default Binding:   Default binding refers to how this is the global context whenever 
        //                       a function is invoked without any of these other rules.
        // 2- Implicit Binding:  occurs when dot notation is used to invoke a function.
        //                       whatever is to the left of the dot becomes the context for this in the function.
        // 3- Explicit Binding:  occurs when .call(), .apply(), or .bind() are used on a function.
        // 4- New Binding:       referencing that new object that the interpretor created
             

  // 3) What does .bind do?

      //Answer
        // creates a new function that, when called, has its this keyword set to the provided value, 
        // with a given sequence of arguments preceding any provided when the new function is called.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    
    var user = new Object({
      username : 'Micko Matamorosa',
      email : 'micko.matamorosa@boom.camp',
      getUsername : function(){
        return this.username;
      }
    });

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem

// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
function Car(brand,carname,year){
  this.brand = brand;
  this.carname = carname;
  this.year = year;
  this.add = 0;
  this.move = 0;
}

Car.prototype.moveCar = function(move){
  return this.move += 10;
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

// Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. 
// The move property will be added to every object that is being returned from the Car function. 
// You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.


//Note(no tests)
  //Code Here

  var priusYear = getYear.bind(prius);
  var mustangYear = getYear.bind(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
    // I think, it getMyUsername returns undefined but if we allow to be assigned and call to myUser object using call() method 
    // it will return 'iliketurtles' which is the value of myUser.username

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
    // window - if not binded to myUser object
    // myUser - if binded to myUser object

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

 