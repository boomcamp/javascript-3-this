//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // used to reference a variable 
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // *new keyword > when use for calling function, the 'this' inside of fucntion is new
      // *apply, call and bind function method > use to set value of this when a function is called
      // *window > top level object  
  // 3) What does .bind do?

      //Answer
      // bind is a method wich has the this keyword set to the value
      
//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
let user = {
  username: 'markjowenamedes',
  email: 'mark.medes@boom.camp',
  getUsername: function(){
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();
//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.
function Car(Brand, Model, year, ){
  this.Brand = Brand;
  this.Model = Model;
  this.year = year;
  this.moveCar = function(){
    return this.move += 10;
  }    
}
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
//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  // value of of username which is 'iliketurtles'
//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  // bound to object 'myUser' which has the data of username

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

