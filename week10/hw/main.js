//Q1

alert("Hello World!");
console.log("My first JavaScript assignment");
document.getElementById("output").textContent = "I just modified this element with JavaScript";

//Q2
let name = "Derek";
let age = 24;
let fav_num = 17.0

console.log(`My name is ${name}, I am ${age} years old, and my favorite number is ${fav_num}.`);





//Q3

function calculate(a,b){
    let add = a+b;
    let sub = a-b;
    let mul = a*b;
    let div = a/b;

    console.log("addition:" + add + "\n"+
        "subtraction:" + sub + "\n" +
        "multiplication:" + mul + "\n"+
        "division:" + div + "\n");
}

calculate(10, 2);
calculate(5, 3);
calculate(8, 4);



//Q4
function fahrenheitToCelsius(f){
    let result = (f - 32) * 5 / 9;
    alert(f + "°F is equal to " + result.toFixed(2) + "°C");
}

function celsiusToFahrenheit(c){
    let result = c * 9 / 5 + 32;
    alert(c + "°C is equal to " + result.toFixed(2) + "°F");
}


//Q5
function string_manipulator(a){
    const upper_case = a.toUpperCase();
    const length = str.length;
    alert(`Uppercase: ${upper}\nCharacter Count: ${length}`);
}

//Q6
var isLightOn = true;

var lightStatus = document.getElementById("lightstatus")
function ToggleSwitch(){
    if (isLightOn == true) {
        isLightOn = false;
        lightStatus.textContent = "Light turned off"
    }
    else{
        isLightOn = true;
        lightStatus.textContent = "Light turned on"
    }
}


var count_display = document.getElementById("countdisplay")
function countByTwo(limit){
    let result = "";
    for (let i = 0; i <= limit; i += 2){
        result += i + " ";
    }
    count_display.textContent = result;
}

