//Here we need to create a pyramid, asking the user how many floors he wants it.

let n = prompt("Hello! And welcome to my wonderful pyramid! How many floors do you want it ?");
n = Number(n);
for(count = 1; count <= n; count++) {
    console.log("#".repeat(count));
}

