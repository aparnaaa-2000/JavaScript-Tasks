const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    
    return true;
}


function getNumberAndCheckPrime() {
    rl.question('Enter a number: ', (input) => {
        const number = parseInt(input, 10);

        if (isNaN(number)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            if (isPrime(number)) {
                console.log(`${number} is a prime number.`);
            } else {
                console.log(`${number} is not a prime number.`);
            }
        }

        
        rl.close();
    });
}


getNumberAndCheckPrime();
