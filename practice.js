//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //The purpose of the 'this keyword' is to refer the object where it belongs to. 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //The four rules that govern the 'this keyword' are, first if the new keyword is used when calling the function, this inside the function is a brand new object. Second, if apply, call, or bind are used to call a function, this inside the function is the object that is passed in as the argument. Third, if a function is called as a method — that is, if dot notation is used to invoke the function — this is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, this is the object to the left of the dot. Last, if a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it’s window.



  // 3) What does .bind do?

      //Answer
      //Bind creates a new function. 


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'diana',
      email : 'diana@boom.camp',
      getUsername (){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

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
  //Code Here
function Car(make, model, year, move){
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  return {
  moveCar () {
     this.move +=10;
    return this.move;
  }
  }
}


getPriusYear  = getYear.bind(prius);
getMustangYear = getYear.bind(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com', 
 getMyUsername : function() {
 return this.username;
}
};

var userName = myUser.getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  //undefined

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  //none

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

