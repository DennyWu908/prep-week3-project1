/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny 
//    when it is called and then displayed into the HTML page.

function sillyWord() {
	var word = "gobsmacked";
	document.getElementById("q1").innerHTML = word;
};

sillyWord();

// 2. Define a function called "divideByTwo". 
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked. 
//    The function should divide the number by two and 
//    then displayed into the HTML page.

function divideByTwo(number) {
	document.getElementById("q2").innerHTML = number / 2;
};

document.getElementById("pointFive").addEventListener("click", function() {
	var daNumber = document.getElementById("intgr").value;
	divideByTwo(daNumber);
});

// 3. Define a function called "greeting". 
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting(name1, name2) {
	document.getElementById("q3").innerHTML = "Hello, " + name1 + " and " + name2 + "!"
};

document.getElementById("sayHello").addEventListener("click", function() {
	var aPerson = document.getElementById("firstPerson").value;
	var otherPerson = document.getElementById("secondPerson").value;
	greeting(aPerson, otherPerson);
});

// 4. Create a function that finds the average of 6 numbers passed in when called 
//    and returns the value and is then displayed in the HTML page.

function average(num1, num2, num3, num4, num5, num6) {
	return (num1 + num2 + num3 + num4 + num5 + num6) / 6
};

var averageNumber = average(1, 2, 3, 4, 5, 8);

document.getElementById("q4").innerHTML = averageNumber;

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price. 

function bill(price) {
	return price * 6
};

var totalPrice = bill(5);

document.getElementById("q5").innerHTML = totalPrice + " dollars.";

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(height, length) {
	return height * length
};

function parameter(height, length) {
	return (height * 2) + (length * 2)
}

var retArea = area(5, 8);

var retParam = parameter(2, 3);

document.getElementById("q6").innerHTML = retArea + " and " + retParam + ".";

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
	return number / 4
};

var pointTwoFive = quarter(20);

document.getElementById("q7").innerHTML = pointTwoFive;

// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
	if (hours > 8) {
		document.getElementById("q8").innerHTML = "You've gotten a good night's sleep!";
	} else {
		document.getElementById("q8").innerHTML = "You need more rest.";
	}
}

sleepings(5);

// 9. Develop a function that determines a person's age by asking them for their birth year.

function yourAge(birthYear) {
	var daAge = 2016 - birthYear
	document.getElementById("q9").innerHTML = daAge;
}

document.getElementById("giveYear").addEventListener("click", function() {
	var userYear = document.getElementById("year").value;
	yourAge(userYear);
});

// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page. 
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]




// 11. Allow a user to enter a three digit number. 
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.





// 12. You've finally gotten around to counting the change in your piggy bank. 
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.













// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.   
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user 
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.








