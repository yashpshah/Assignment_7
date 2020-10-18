//STEP 1
function halfNumber(number) {
    "use strict";
    var result = number / 2;
    return ("Half of " + number + " is " + result + ".");
}
window.console.log(halfNumber(2));
//STEP 2
function squareNumber(number) {
    "use strict";
    var result = number * number;
    return ("The result of squaring the number " + number + " is " + result + ".");
}
window.console.log(squareNumber(3));
//STEP 3
function percentOf(number1, number2) {
    "use strict";
    var result = (number1 / number2) * 100;
    return (number1 + " is " + result + "% of " + number2 + ".");
}
window.console.log(percentOf(2, 4));
//STEP 4
function findModulus(number1, number2) {
    "use strict";
    var result = (number2 % number1)
    return (result + " is the modulus of " + number1 + " and " + number2 + ".");
}
window.console.log(findModulus(4, 10));
//STEP 5
function sumOfNumber() {
    "use strict";
    var numbers = window.prompt("Enter the numbers you want to add delimited by comma").split(",");
    var total = 0;
    var i = 0;
    for (i; i < numbers.length; i += 1) {
        total = total + parseInt(numbers[i]);
    }
    return ("Sum of all numbers are: " + total);
}
window.console.log(sumOfNumber());
