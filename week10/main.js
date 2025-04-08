let name = "Derek";
let age = 20;
let coding = true;  // Fixed the boolean value

var isOn = true;

function math(a,b){
    let c = a+ b;
    alert("the sum val is " + c);
}

function cus_console(){
    console.log("this is console log");
}

function switchOFF(){
    if (isOn == true) {
        alert("turning the switch off");
        isOn = false;
    }
    else {
        alert("switch is already off");
    }
}


document.getElementById("practice").innerHTML = 
    "Hello, my name is " + name + ". I am " + age + " years old and I am " + 
    (coding ? "a programmer." : "not a programmer.");
