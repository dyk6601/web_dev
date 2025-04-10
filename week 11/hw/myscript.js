let grocery_list = ["Eggs", "Greek Yogurt", "Chicken", "Salad"];

function updateList() {
    let print_arr = grocery_list.join(", ");
    document.getElementById("GroceryList").textContent = print_arr;
}

updateList(); // Initial load

document.getElementById("addMilkBtn").addEventListener("click", function () {
    if (!grocery_list.includes("Milk")) {
        grocery_list.push("Milk");
        updateList();
    }
});

// Math: rounding examples
var num = 2.25;
var round_down = Math.floor(num);
var round_up = Math.ceil(num);
var just_round = Math.round(num);
var random_num = Math.random();

console.log({ round_down, round_up, just_round, random_num });
