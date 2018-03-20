// Loop through all the given arguments, adding up their sum.
var sum = 0;
for (let argnum = 2; argnum < process.argv.length; argnum++) {
    // sum = sum + Number(process.argv[argnum]);
    sum = sum + +process.argv[argnum];
}

console.log(sum);
