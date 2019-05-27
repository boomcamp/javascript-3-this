//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

    // Answer
    // 'this keyword' is used as a shortcut for reference of an object. It references the object that is calling it. Based on what I read, it would make the code unambiguous.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
    //Answer
    // 1. Default binding - The value of the function that is contained in the global scope will be the window object. 
    // 2. Implicit binding - Using dot to bound an object. The object before the dot is where the this keyworrd will be bound to. It just relying on the DEFAULT behaviour of the javascript.
    // 3. Explicit Binding - Taking a very concrete action. You can force a function call to use a particular object for this binding, without putting a property function reference on the object. Using functions such as call, apply and bind.
    // 4. New Binding - 'this keyword' will be bound to the new object being created.
  
//3) What does .bind do?

    //Answer
    //It creates a new function that will have 'this' set to first parameter passed to bind().


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  let user = {
    username : 'haceremorosa',
    email    : 'hazel.remorosa@boom.camp',
    getUsername() {
      return(this.username);
    }
  }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

function Car(brand, model, year, move) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = move;
}

Car.prototype.moveCar = function () {
  this.move += 10;
  return this.move;
}

var prius = new Car('Toyota', 'Prius', 2011, 0);
var mustang = new Car('Ford', 'Mustang', 2013, 0);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

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
var getMustangYear = getYear.bind(mustang);

console.log(getPriusYear);
console.log(getMustangYear);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

