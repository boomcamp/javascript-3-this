// IMPORTANT NOTE: use var for declaring variables

//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      "The 'this' keyword basically refers to a specific object and it is usually used to dynamically utilized a function/method. It is just like reusing the function with different data passed on the parameters. This keyword usually the object left of the dot when invoking a function"
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      "Default Binding- when a function is bound to a window object" 
      "Implicit Binding- when a function is bound to a user define object"
      "Explicit Binding- it becomes explicit when we force the function to bind to an object. like using (.bind, .apply, .call)"
      "New Binding- this is use for an object to have an access to the properties of function"
  // 3) What does .bind do?
       
      //Answer"
        "bind allows us to do is explicitly set the context of 'this' keyword or the value of 'this'."
//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: '',
      email: '',
      getUsername(){
        return this.username
      }
    }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here
    function Car(brand, model, year){
      this.brand = brand,
      this.model = model,
      this.year = year,
      this.move = 0
    }
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).
    Car.prototype.moveCar = function (){
      this.move += 10;
      
      return this.move;
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
  //Code Here
  getPriusYear = getYear.bind(prius);
  getMustangYear = getYear.bind(mustang);
  console.log(`Mustang Year Model: ${getMustangYear()}, Prius Year Model: ${getPriusYear()}`);


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
     undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  'window object'

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.
var userName = getMyUsername.call(myUser);