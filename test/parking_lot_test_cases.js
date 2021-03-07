let expect = require('chai').expect;
let parkingLot = require('.././parking_lot');

describe('create parking lot with 6 slots', function () {
    it('should create 6 parking slots', function () {
      var preResult = 'Created parking lot with 6 slots.';
      var result = parkingLot.createParkingLot(6);
      console.log(result);
      expect(result).to.be.equal(preResult);
  
    });
});
  