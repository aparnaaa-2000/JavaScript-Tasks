const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumbersAndCalculateSum() {
    rl.question('Enter the first number: ', (input1) => {
        const num1 = parseFloat(input1);

        rl.question('Enter the second number: ', (input2) => {
            const num2 = parseFloat(input2);

            
            if (isNaN(num1) || isNaN(num2)) {
                console.log('Please enter valid numbers.');
            } else {
              
                const sum = num1 + num2;
                console.log('The sum of', num1, 'and', num2, 'is:', sum);
            }

           
            rl.close();
        });
    });
}


getNumbersAndCalculateSum();
