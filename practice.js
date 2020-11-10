// IMPORTANT NOTE: use var for declaring variables

//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

        //The keyword 'this' is used in JavaScript to point to a particular object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      /*
        1. Global Scope - if a function which includes 'this' keyword, is called from the global scope then this will point to the window object.
        2. Implicit Binding - this points to the object on which the function is called (what’s to the left of the period when the function is called).
        3. Explicit Binding -  explicitly tell the JavaScript engine to set this to point to a certain value using call, apply or bind.
        4. new Binding - using the new keyword constructs a new object, and this points it.

      */

  // 3) What does .bind do?

       //It can be used to set the context of 'this' to a specified object when a function is invoked.*/


//Next Problem  

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "jericho",
      email: "jericho.aldemo@boom.camp",
      getUsername() {
        return this.username
      },
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

    user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(brand, model, year) {
    this.move = 0
    this.brand = brand
    this.model = model
    this.year = year
    this.moveCar = function() {
      this.move += 10
      return this.move
    }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

console.log(prius.moveCar()); //increments prius' move property by 10. Returns the new move property.
console.log(mustang.moveCar()); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// Above you are given a getYear function.  Use the bind function to bind the prius object to the function and save it in a variable called getPriusYear
// Then use the bind function to bind the mustang to the function and save it in a varabile called getMustangYear
// Console Log the results of the getPriusYear and getMustangYear to see that they are returning the correct years.

//Note(no tests)
var getPriusYear = getYear.bind(prius)
var getMustangYear = getYear.bind(mustang)
console.log(getPriusYear())
console.log(getMustangYear())



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
  //Undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //window object


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

