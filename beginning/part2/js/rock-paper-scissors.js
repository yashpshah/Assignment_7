function r_p_s() {
    var choice = window.prompt("Enter your choice: rock, paper or scissors.").toLowerCase();
    var res = Math.random();
    var compChoice;
    if (res <= 0.33) {
        compChoice = "rock";
    }
    else if (res <= 0.66) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        if (choice === compChoice) {
            window.alert("That's a tie! Try again.");
            r_p_s();
        }
        else {
            if (choice === "rock") {
                if (compChoice === "scissors") {
                    window.alert("You won!");
                }
                else {
                    window.alert("Computer won!");
                }
            }
            else if (choice === "paper") {
                if (compChoice === "rock") {
                    window.alert("You won!");
                }
                else {
                    window.alert("Computer won!");
                }
            }
            else {
                if (compChoice === "paper") {
                    window.alert("You won!");
                }
                else {
                    window.alert("Computer won!");
                }
            }
        }
    }
    else {
        window.prompt("Enter a valid choice.");
    }
}
r_p_s();