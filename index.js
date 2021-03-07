const fs = require('fs'); 
const readline = require('readline');
const parkingLotInstance = require('./parking_lot');

var myArgs = process.argv.slice(2);

const file = readline.createInterface({
    input: fs.createReadStream(myArgs[0]),
    output: process.stdout
});

/**
 * Parser for the commands from the file
 */
let parkingLotExec = () => {
    file.on('line', (input) => {
        input = input.split(" ");
        
        switch (input[0]) {
            case ('create_parking_lot'):
                try {
                    const result = parkingLotInstance.createParkingLot(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('park'):
                try {
                    const result = parkingLotInstance.parkCar(input[1].trim());
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    const result = parkingLotInstance.carLeave(input[1], parseInt(input[2]));
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;


            case ('status'):
                try {
                    const result = parkingLotInstance.parkingSlotStatus();
                    console.log(result);

                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;

            default:
                console.log('There seems to be an issue with the input command in the file.');
        }

    });
}
 
parkingLotExec();