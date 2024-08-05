const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function checkEvenOrOdd(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log('Invalid input');
        return;
    }

    if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}


function getNumberAndCheck() {
    rl.question('Enter a number: ', (input) => {
        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            checkEvenOrOdd(number);
        }

        
        rl.close();
    });
}


getNumberAndCheck();
