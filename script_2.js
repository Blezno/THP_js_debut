//Here we  are supposed to ask the user to give us a number so we can calculate the factorial.
// To do so, first we need a prompt to ask for a number.
//Then we'll need a for loop to calculate from the given number
//And last, the console we'll show the results.


let n = prompt("Which number do you want to calculate the factorial ?");

//so we start to define a function with a condition
function factorialize(num){
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
let result = factorialize(n);
console.log(result);
