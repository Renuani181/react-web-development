function getData() {

    const name = "Renuka"; // cannot be changed once defined and only accesed inside the funtion
    let currentclass = 12; // can be changed once defined and only accesed inside the funtion
    var currentday = "Tuesday";
    curretclass = 12;

}

getData();

// expressiona (+,-,*,/, %)

console.log("add: ", 3+3);
console.log("sub: ", 3-3);
console.log("mul: ", 3*3);
console.log("div: ", 3/3);
console.log("mod: ", 3%3);

//flow control 

function getNumberData(num){
    if(num > 0){
        console.log(num, "is positive");
    }
    else if(num < 0){
    console.log(num, "is negative");
    }
    else (num = 0){
        console.log(num, "is Zero");
        }
}
getNumberData();

//ternary operator

const name = "Renuka";
name == "Renuka" ? console.log(true) : console.log(false);

//switch case
function getWeekCount(DaysData){
    switch(DaysData){
        case 1:
            return "monday";
            break;

    }
}

//loops 

const MyFriends = ["one", "two", "three"];
for(let i =0; i < MyFriends?.Lenght; i++){
    console.log(MyFriends[i]);
}

