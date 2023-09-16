"use strict";
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
// Solution:
var userName = "Bushra";
// console.log("Hello "+userName+  ", would you like to learn some Python today?"); 
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Solution:
// console.log(userName.toLowerCase());
//  console.log(userName.toUpperCase());
//  console.log(userName.toTitleCase());
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks: 
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// Solution:
var quote = "The only thing we have to fear is fear itself.";
var author = "Franklin D. Roosevelt";
//  console.log(author + " Once said, " + '"' + quote + '"');
//  5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Solution:
var famous_person = "Benjamin Franklin";
var message = "Three can keep a secret, if two of them are dead.";
//   console.log(famous_person + " Once said, " + '"' + message + '"');
//   6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Solution:
var person = "Riaz";
//  console.log( person +"\n|");
//  console.log("\t" + person.trim());
//  7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Solution:
var addition = 5 + 3;
//  console.log("result of Addition " + addition )
var multiple = 4 * 2;
//  console.log("Result of Multiplication " + multiple )
var division = 16 / 2;
//  console.log("Result of Division " + division )
var subtraction = 10 - 2;
//  console.log("Result of Substraction " + subtraction )
//  8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(14-6);
// console.log(64/8);
// console.log(2*4);
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// Solution:
var fav_number = 10;
var message = "My favorite number is " + fav_number;
//  console.log(message);
//  10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//  because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//  describing what the program does.
// Solution:
// Author: [Bushra Riaz]
// Date: 2023-09-07
// This program performs addition, subtraction, multiplication, and division operations
// to obtain the number 8 and prints the results using console.log.
// Addition
// console.log(5 + 3);
// Subtraction
// console.log(15 - 7);
// Multiplication
// console.log(4 * 2);
// Division
// console.log(16 / 2);
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Solution:
var names = ["Riaz", "Bushra", "Moti", "Mahdi", "Huda"];
//  console.log(names[0]);
//  console.log(names[1]);
//  console.log(names[2]);
//  console.log(names[3]);
//  console.log(names[4]);
//  12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// Solution:
//  console.log("Hello " + names[0]);
//  console.log("Hello " + names[1]);
//  console.log("Hello " + names[2]);
//  console.log("Hello " +names[3]);
//  console.log("Hello " +names[4]);
//  13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Solution:
var transportation = ["car", "bike", "motorcycle"];
// console.log("I would like to own a " + transportation[0]);
// console.log("I would like to own a " + transportation[1]);
// console.log("I would like to own a " + transportation[2]);
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Solution:
var guests = ["Riaz", "Bushra", "Moti"];
//  console.log("Hello " + guests[0] + " I would like to invite you to my dinner");
//  console.log("Hello " + guests[1] + " I would like to invite you to my dinner");
//  console.log("Hello " + guests[2] + " I would like to invite you to my dinner");
//  15. Changing Guest List: You just heard that one of your guests can’t make the  dinner, so you need to send out a new set of invitations. You’ll have to think of
//  someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// Solution:
// Initial guest list
let guestList = ["Ayesha", "Fatima", "Aliza", "Saba"];
// Guest who can't make it
const oldGuest = "Fatima";
// New guest to invite
const newGuest = "Nida";
// Print the name of the guest who can't make it
// console.log(`${oldGuest} can't make it to the dinner.`);
// Replace the guest who can't make it with the new guest
// const indexOfOldGuest = guestList.indexOf(oldGuest);
// if (indexOfOldGuest !== -1) {
//   guestList[indexOfOldGuest] = newGuest;
// }
// Print a second set of invitation messages
// console.log("Updated Guest List:");
// guestList.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to the dinner.`);
// });
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Solution:
let guestList2 = ["Ayesha", "Nia", "Aliza", "Fatima", "Saba"];
// guestList2.unshift("Maryam");
// let middleGuest= Math.floor(guestList2.length/2);
// guestList2.splice(middleGuest, 0 , "Seerat");
// guestList2.push("Horran");
// console.log("We found a bigger table, so we can invite more people to dinner.")
// guestList2.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to the dinner.`);
// });
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// Solution:
// console.log("We can invite only two people for dinner.");
// while (guestList2.length > 2) {
//   const removedGuest = guestList2.pop();
//   console.log(`Sorry, ${removedGuest}, but you are not invite to the dinner.`);
// }
// guestList2.forEach((guest) => {
//   console.log(`Dear ${guest}, you are still invited to the dinner.`);
// });
// guestList2.pop();
// guestList2.pop();
// console.log(guestList2);
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Solution:
let locaArr = ["Naran", "Swat", "London"];
// console.log(locaArr);
// console.log(locaArr.sort());
// console.log(locaArr.sort().reverse()); 
// console.log(locaArr.reverse());
// console.log(locaArr.sort());
// console.log(locaArr.sort().reverse()); 
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
// Solution:
// console.log(guestList.length);
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
// Solution:
let countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Germany",
    "Japan",
    "Australia",
];
// console.log("List of Countries:");
// for (const country of countries) {
//   console.log(country);
// }
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Solution:
let car = {
    color: "Black",
    company: "Vigo"
};
// console.log(car);
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// Solution:
let myArray = [1, 2, 3];
let indexError = myArray[5];
// if (myArray.length > 5) {
//     indexError = myArray[5];
// } else {
//     console.log("Index is out of bounds.");
// }
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// Solution:
let car2 = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Solution:
// console.log("TRUE")
// console.log(car2 == 'subaru');
// console.log(car2 != 'ford');
// console.log(car2.startsWith('su'))
// console.log(car2.endsWith('aru'));
// console.log(car2.length === 6);
// console.log("FALSE")
// console.log(car2 != 'subaru');
// console.log(car2 == 'honda');
// console.log(car2 != 'subaru');
// console.log(typeof car2 === 'number');
// console.log(car2 < 'honda');
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Solution:
let string1 = 'apple';
let string2 = 'banana';
// console.log(string1 == 'apple');
// console.log(string1 != string2);
let inputText = 'Hello, World!';
// console.log(inputText.toLowerCase() == 'hello, world!');
let num1 = 10;
let num2 = 5;
// console.log(num1 > num2);
// console.log(num1 <= num2);
let isSunny = true;
let isWarm = false;
// console.log(isSunny && isWarm);
// console.log(isSunny || isWarm);
let fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.includes('banana'));
// console.log(!fruits.includes('grape'));
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.) 
// Solution:
let alien_color = "green";
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// else{
//   console.log("You failed")
// }
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Solution:
let color = "red";
// if (color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// else{
//   console.log("Congratulations! You just earned 10 points.")
// }
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Solution:
let color2 = "red";
// if (color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// else if (color2 === 'yellow') {
//   console.log("Congratulations! You just earned 10 points.")
// }
// else{
//   console.log("Congratulations! You just earned 15 points.")
// }
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// Solution:
let person2 = 10;
// if(person2 < 2){
//   console.log("The person is a baby");
// }
// else if(person2 > 2 && person2 < 4){
//   console.log("The person is a toddler.")
// }
// else if(person2 > 4 && person2 < 13){
//   console.log("The person is a kid.")
// }
// else if(person2 > 13 && person2 < 20){
//   console.log("The person is a teenager.")
// }
// else if(person2 > 20 && person2 < 65){
//   console.log("The person is a adult.")
// }
// else{
//   console.log("The person is a elder.")
// }
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// Solution:
let favorite_fruits = ["Banana", "Mango", "Grapes"];
// if ("Banana" in favorite_fruits){
//   console.log("I really like bananas")
// }
// if ("Mango" in favorite_fruits){
//   console.log("I really like bananas")
// }
// if ("Grapes" in favorite_fruits){
//   console.log("I really like bananas")
// }
// if ("Apple" in favorite_fruits){
//   console.log("I really like bananas")
// }
// if ("Orange" in favorite_fruits){
//   console.log("I really like bananas")
// }
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// Solution:
let userNames = ["Saima", "Khizra", "Saira", "Ali", "Usama",
    "admin"];
// for(const username in userNames)
//   if(username === "admin"){
//      console.log("Hello admin, would you like to see a status report?")
//   }
//   else{
//      console.log(` Hello ${username}, thank you for logging in again`)
//   }
//   31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Solution:
const usernames = ["admin", "user1", "user2", "user3"];
// if (usernames.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   usernames.splice(0, usernames.length);
//   console.log("All usernames have been removed.");
// }
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Solution:
let current_users = ['admin', 'hifza', 'Taskeen', 'Habiba', 'Laiba'];
let new_users = ['admin', 'Kiran', 'hifza', 'Habiba', 'Iram'];
// for(let new_user in new_users)
//     if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())){
//         console.log(`Sorry, the username ${new_user}is  already taken. Please choose another username.`)
//     }
//         else{
//         console.log(`The username ${new_user} is available.`)
//     }
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
// Solution:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numbers) {
//     let ordinal: string;
//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(`${number}${ordinal}`);
// }
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
// Solution:
let pizzas = ["fajita", "Malai", "Tandoori"];
// for(let pizza of pizzas){
//   console.log(`I like ${pizza} pizza`)
// }
//  console.log("I like Bahari Kabab Pizza. It is so much declicious. The dough is very soft and stuffing of kabab in dough is just an amazing.I really love pizza ")
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// Solution:
const commonCharacteristic = "are mammals";
const animals = ["Dog", "Cat", "Elephant"];
// console.log("List of Animals:");
// for (const animal of animals) {
//     console.log(animal);
// }
// console.log("\nMore about these animals:");
// for (const animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }
// console.log(`\nAny of these animals would make a great pet! They all ${commonCharacteristic}.`);
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, message) {
    console.log(`You have ordered shirt of ${size} size, with text ${message} `);
}
// make_shirt("medium","Hello Beautiful!")
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt2(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered shirt of ${size} size, with text ${message} `);
}
// make_shirt2();
// make_shirt2("medium");
// make_shirt2("small", "TypeScript is awesome");
// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country) {
    console.log(`${city}, in ${country}`);
}
// describe_city("lahore","Pakistan")
// describe_city("Islamabad","Pakistan")
// describe_city("Tokoyo","Pakistan")
// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
function city_country(city, country) {
    console.log(`"${city}" ,  "${country}"`);
}
city_country("Lahore", "Pkaistan");
city_country("Sialkot", "Pkaistan");
city_country("Balakot", "Pkaistan");
