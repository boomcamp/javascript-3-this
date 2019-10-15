//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?
      //Answer
      
      "'this' is used as a reference mostly to variables and object properties. It is utilize as a pointer contituting to a given variable relative to its context i.e. window,function, object etc."
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer 

     "Default Binding - When this is compartmentalized on a function its value will be a reference to the window object."

      
     "Implicit Binding - 'this' on precedence of dot operation. The value of ‘this’ is delegated to the left reference object as defined on its              implementations."
	
      "New Binding - When 'this' is invoked on a constructor its value will be a reference to that object’s instance."
	
      "Explicit Binding - 'this' on aplly,bind, and call. When apply, bind and call methods are applied ‘this’ referred to its object as its value."

  // 3) What does .bind do?

      //Answer

      "Bind reference the 'this' to its object, particularly used as its argument, overriding its default implementations."

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

    var user ={
      username : "",
      email: "",
      getUsername: function(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    
    user.getUsername();

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

  function Car(model, type, year){
    this.model = model;
    this.type = type;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      return this.move += 10;
    }
  }

  var getPriusYear = getYear.bind(prius);
  var getMustangYear = getYear.bind(mustang);

  console.log(`Prius Year Model: ${getPriusYear()} and  Mustang Year Model: ${getMustangYear()} `);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com',
};

var getMyUsername = function() {
 return this.username;
};

// var userName = getMyUsername.call(myUser); //Fix this
var userName = getMyUsername.apply(myUser);

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here
  
  'undefined;'
  

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here
  'global'

//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

