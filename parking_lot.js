let parkedCars = [];
let availableParkingLots = [];
let maxSize = 0;

// Function to create the parking lot with n slots
let createParkingLot = (size) => {
    try {
        maxSize = parseInt(size);

        for(i = 1; i <= maxSize; i++) {
            availableParkingLots.push(i);
        }

        return `Created parking lot with ${maxSize} slots.`;
    } catch(err) {
        return "Invalid parameter to create the parking lot.";
    }
}

// Function to park the car
let parkCar = (carNo) => {
    try {
        if(maxSize === 0) {
            return "Parking lot is not created.";
        }else if(maxSize === parkedCars.length) {
            return "Sorry, parking lot is full.";
        }

        let carParkingSlot = availableParkingLots[0];

        parkedCars.push({
           'slot':  carParkingSlot,
           'car_no': carNo
        });

        availableParkingLots.shift();

        return `Alloted slot number: ${carParkingSlot}`;
    } catch(e) {
        return "Invalid parameter to create the method for car park."; 
    }
}

// Function for car leave and calculate the parking charges
let carLeave = (carNo, noOfHours) => {
    try {
        if(maxSize === 0) {
            return "Parking lot is not created.";
        }

        // Check if car has been alloted the parking slot
        let checkCarAlloted = 0;
        let checkCarSlot = 0;
        parkedCars.forEach(function(row) {
            if(row.car_no == carNo) {
                checkCarAlloted = 1;
                checkCarSlot = row.slot;
            }
        });

        if(checkCarAlloted) {
            // Update the parked cars
            parkedCars.forEach(function(row, index) {
                if(row.slot === checkCarSlot) {
                    parkedCars.splice(index, 1);
                }
            });

            // Update the parking lot
            availableParkingLots.push(checkCarSlot);
            availableParkingLots.sort();

            // Calculate the parking charges
            let totalCharges = 0;

            if(noOfHours < 2 && noOfHours > 0) {
                totalCharges += 5;

                return `Registration Number ${carNo} with Slot Number ${checkCarSlot} is free with charge ${totalCharges}`; 
            } else if(noOfHours === 2) {
                totalCharges += 10;

                return `Registration Number ${carNo} with Slot Number ${checkCarSlot} is free with charge ${totalCharges}`;
            } else if(noOfHours >= 2) {
                totalCharges += 10;
                let diffHours = noOfHours - 2;
                let perHourAddCharge = diffHours * 10;
                totalCharges += perHourAddCharge;

                return `Registration Number ${carNo} with Slot Number ${checkCarSlot} is free with charge ${totalCharges}`;
            }
        } else {
            return "Car is not alloted the parking slot."
        }
    } catch(e) {
        return "Invalid parameters to create the method for car leave.";
    }
}

// Function to show the cars along with their alloted slots in the parking lot
let parkingSlotStatus = () => {
    try {
        console.log("Slot No. Registration No.");

        parkedCars.sort(function(a, b) {
            return a.slot - b.slot;
        });

        parkedCars.forEach(function(row) {
            console.log(`${row.slot}          ${row.car_no}`);
        });
    } catch(e) {
        return "There seems to be an error in the method.";
    }
}

module.exports = {
    createParkingLot,
    parkCar,
    carLeave,
    parkingSlotStatus
}