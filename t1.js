//Elzero array
//Task1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false,myFriends.length-true)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];


//Task2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let listOne = friends.pop();
let listTwo = friends.shift();

console.log(friends); // ["Eman", "Osama"]


//Task3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo);

// Write One Single Line Of Code

console.log(finalArr.sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//Task4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[indexOf(g)][0].slice(indexOf(g))); // ZERO
//Task5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)){
    console.log("Found")
}
//Task6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2);

// Your Code Here

console.log(allArrs.sort().slice(arr2.length)); // fxy

