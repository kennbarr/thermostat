'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('.increase raises temperature by 1 degree', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('.decrease lowers temperature by 1 degree', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("decrease does not alter temperature below min temperature", function(){
    for(var i = 10; i >= 0; i-- ) {
        thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it(".reset sets temperature to default temperature", function() {
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it(".getColor returns green when temp under LOW_THRESHOLD", function() {
    for(var i = 0; i< 3; i++ ) {
        thermostat.decreaseTemperature();
    }
    expect(thermostat.getColor).toEqual("green")
  });

  describe("when power saving mode is on", function() {
    it(".increase won't increase temperature past 25 degress", function(){
      thermostat.enablePowerSavingMode();
      for(var i = 20; i <= 26; i++ ) {
          thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", function() {
    it(".increase won't increase temperature past 32 degress", function(){
      thermostat.disablePowerSavingMode();
      for(var i = 20; i <= 33; i++ ) {
          thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });


});
