#!/usr/bin/env node
const readline = require('readline');
const parkingLotInstance = require('./parking_lot')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Parser for the commands that user input
 */
let intiMain = () => {
    rl.on('line', async (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('create_parking_lot'):

                try {
                    const result = await parkingLotInstance.createParkingLot(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('park'):
               // console.log("input", input);
                try {
                    const result = await parkingLotInstance.parkCar(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    const result = await parkingLotInstance.carLeave(input[1], parseInt(input[2]));
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;


            case ('status'):

                try {
                    const result = await parkingLotInstance.parkingSlotStatus();
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('exit'):
                rl.pause();
                break;

            default:
                console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!');
        }

    });
}

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
}); 
 
intiMain();