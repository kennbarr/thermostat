'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("can increase the temperature", function(){
    thermostat.upButton();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("can decrease the temperature", function(){
    thermostat.downButton();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function(){
    for(var i = 0; i < 11; i++) {
      thermostat.downButton();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it("has power saving mode on by default", function(){
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  it("temp max is 25 when power saving mode is on", function(){
    for(var i = 0; i < 6; i++) {
      thermostat.upButton();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("temp max is 32 when power saving mode is off", function(){
    thermostat.turnPowerSavingOff();
    for(var i = 0; i < 13; i++) {
      thermostat.upButton();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it("if temp was above 25, powerSavingModeOn reduces it to 25 ", function(){
    thermostat.turnPowerSavingOff();
    for(var i = 0; i < 13; i++) {
      thermostat.upButton();
    }
    thermostat.turnPowerSavingOn();
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("can reset temperature to 20 degrees", function(){
    thermostat.upButton();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("returns low-energy when temperature below 18", function(){
    for(var i = 0; i < 3; i++) {
      thermostat.downButton();
    }
    expect(thermostat.energyUsage()).toEqual("low-energy");
  });

  it("returns medium-energy when temperature below 25", function(){
    expect(thermostat.energyUsage()).toEqual("medium-energy");
  });

  it("returns high-energy when temperature is 25 or higher", function(){
    for(var i = 0; i < 5; i++) {
      thermostat.upButton();
    }
    expect(thermostat.energyUsage()).toEqual("high-energy");
  });

});
