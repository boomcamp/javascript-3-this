//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // to access methods and properties of the object inside the function

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // the function called by new
      // function called by call(), apply(), or bind() 
      // function called as a method, ie: obj.func()
      // function called global scope 
  // 3) What does .bind do?

      //Bind creates a new function that will have this set to the first parameter passed to bind()


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  var user = {
      username: "Vincent",
      email: "vincent.navas@boom.camp",
      getUsername(){
        return(this.username);
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername(user);  
//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
  
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.moveCar = function() {
      this.move+=10;
      return this.move;
    }
  }
 
//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
  function moveCar(){

  }

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
  var getPriusYear = getYear.bind(prius);



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.apply(myUser); //Fix this
console.log(username);

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //  iliketurtles

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //username


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

