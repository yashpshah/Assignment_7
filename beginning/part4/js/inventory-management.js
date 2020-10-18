/*eslint-env browser*/
function display() {
    "use strict";
    window.console.log("Welcome to the inventory management sysytem");
    window.console.log("");
    window.console.log("Choose on of the following Command:");
    window.console.log("view - view all products");
    window.console.log("update - add new product");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function main() {
    "use strict";
    display();
    var inventory;
    inventory = [];
    inventory[0] = [1, "Shirt", 10, 15.99];
    inventory[1] = [2, "T-shirt", 20, 18.99];
    inventory[2] = [3, "Jeans", 30, 20.99];
    inventory[3] = [4, "Shoes", 40, 29.99];
    inventory[4] = [5, "Hat", 50, 5.99];
    while (true) {
        var command = window.prompt("Enter a command");
        if (command) {
            if (command === "view") {
                view(inventory);
            }
            else if (command === "update") {
                update(inventory);
            }
            else if (command === "exit") {
                break;
            }
            else {
                window.console.log("Please enter a valid command");
            }
        }
        else {
            break;
        }
    }
    window.console.log("Program Terminated");
}
main();

function view(inventory) {
    "use strict";
    var i = 0;
    for (i; i < inventory.length; i += 1) {
        window.console.log(inventory[i]);
    }
}
function update(inventory) {
    "use strict";
    var sku, quantity;
    sku = parseInt(window.prompt("Enter Sku number"));
    quantity = parseInt(window.prompt("Enter new stock quantity"));
    var i = 0;
    for (i; i < inventory.length; i += 1) {
        if (inventory[i][0] === sku) {
            inventory[i][2] = quantity;
            window.console.log("inventory is successfully updated");
            break;
        }
    }
}