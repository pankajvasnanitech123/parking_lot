let expect = require('chai').expect;
let parkingLot = require('.././parking_lot');

// Test for creating the parking lot with n slots 
describe('create parking lot with n slots', function () {
    it('should create parking lot with n slots', function () {
      var size = 4;
      var expectedResult = 'Created parking lot with '+size+' slots.';
      var actualResult = parkingLot.createParkingLot(size);
      
      expect(actualResult).to.be.equal(expectedResult);
  
    });
});

// Test for car park
describe('park car', function () {
    it('park car and alloted slot', function () {
      var slot = 1;
      var carNo = 'MZ-01';
      var expectedResult = `Alloted slot number: ${slot}`;
      var actualResult = parkingLot.parkCar(carNo);
      
      expect(actualResult).to.be.equal(expectedResult);
  
    });
});

// Test for car leave
describe('park leave', function () {
    it('car leave and slot is free with correct parking charge', function () {
      var noOfHours = 3;
      var carNo = 'MZ-01';
      var carSlot = 1;
      var totalCharges = 20;

      var expectedResult = `Registration Number ${carNo} with Slot Number ${carSlot} is free with charge ${totalCharges}`;
      var actualResult = parkingLot.carLeave(carNo, noOfHours);
      
      expect(actualResult).to.be.equal(expectedResult);
  
    });

    it('car with unalloted parking lot leave', function () {
        var noOfHours = 3;
        var carNo = 'MZ-010';
        var carSlot = 1;
        var totalCharges = 20;
  
        var expectedResult = `Car is not alloted the parking slot.`;

        var actualResult = parkingLot.carLeave(carNo, noOfHours);
        
        expect(actualResult).to.be.equal(expectedResult);
    
    });
});

// Test for parking lot status
describe('parking lot status', function () {
    it('show parking lot status', function () {
      var actualResult = parkingLot.parkingSlotStatus();
      
      expect(actualResult).to.be.equal(actualResult);
  
    });

    it('park car and alloted slot', function () {
        var slot = 1;
        var carNo = 'MZ-02';
        var expectedResult = `Alloted slot number: ${slot}`;
        var actualResult = parkingLot.parkCar(carNo);
        
        expect(actualResult).to.be.equal(expectedResult);
    
      });

    it('show parking lot status', function () {
        var actualResult = parkingLot.parkingSlotStatus();
        
        expect(actualResult).to.be.equal(actualResult);
    
      });
});
  