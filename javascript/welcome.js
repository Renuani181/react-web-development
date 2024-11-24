// function getData() {

//     const name = "Renuka"; // cannot be changed once defined and only accesed inside the funtion
//     let currentclass = 12; // can be changed once defined and only accesed inside the funtion
//     var currentday = "Tuesday";
//     curretclass = 12;

// }

// getData();

// expressiona (+,-,*,/, %)

console.log("add: ", 3 + 3);
console.log("sub: ", 3 - 3);
console.log("mul: ", 3 * 3);
console.log("div: ", 3 / 3);
console.log("mod: ", 3 % 3);

//flow control 

// function getNumberData(num){
//     if(num > 0){
//         console.log(num, "is positive");
//     }
//     else if(num < 0){
//     console.log(num, "is negative");
//     }
//     else (num = 0){
//         console.log(num, "is Zero");
//         }
// }
// getNumberData();

//ternary operator

// const name = "Renuka";
// name == "Renuka" ? console.log(true) : console.log(false);

//Write a programe which will print number is positive , negative or zero using switch statement.
function getNumber(num) {
    switch (true) {
        case num > 0:
            return "positive";
            break;
        case num < 0:
            return "negative";
            break;
        case num == 0:
            return "zero";
            break;
        default:
            return "not valid number";
            break;


    }

}
console.log("integer", getNumber(3));

//loops 

const MyFriends = ["one", "two", "three"];
for (let i = 0; i < MyFriends?.Lenght; i++) {
    // console.log(MyFriends[i]);
}

// Write a programe which will filter the multiple of 3 from given array. [1,3,4,5,6,7,8,9,0,12,45,77]

const array = [1, 3, 4, 5, 6, 7, 8, 9, 0, 12, 45, 77]
const filteredData = array.filter((num) => {
    return num % 3 === 0;
});
// console.log(filteredData);

// Write a programe which will take your name and age and show one liner sentence using string literals.

const name = "Renu";
const age = "24";

function introduceYourself(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

// Display the introduction
console.log(introduceYourself(name, age));

// Write a programe which will print from given number to 0 using for loop. (if given number is 5 so out should 5,4,3,2,1,0)

function NumberBackwards(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }

}
const givenNumber = 5;
NumberBackwards(givenNumber);

