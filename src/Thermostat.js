'use strict';

function Thermostat() {

  const START_TEMPERATURE = 20;
  const MIN_TEMPERATURE = 10;
  const POWER_SAVING_MODE_ON_MAX_TEMPERATURE = 25;
  const POWER_SAVING_MODE_OFF_MAX_TEMPERATURE = 32;

  var isMaximumTemperature = function(powerSaving, temperature) {
    if(powerSaving){
      return temperature >= POWER_SAVING_MODE_ON_MAX_TEMPERATURE
    } else {
      return temperature >= POWER_SAVING_MODE_OFF_MAX_TEMPERATURE
    }
  };

  this.powerSaving = true;
  this.temperature = START_TEMPERATURE;


  this.decreaseTemperature= function() {
    if(this.temperature > MIN_TEMPERATURE) {
      this.temperature--;
    }
  };

  this.getCurrentTemperature= function() {
    return this.temperature;
  };

  this.increaseTemperature= function() {
    if(!isMaximumTemperature(this.powerSaving, this.temperature)) {
      this.temperature++;
    }
  };

  this.enablePowerSavingMode=function() {
    this.powerSaving = true;
  };

  this.disablePowerSavingMode=function() {
    this.powerSaving = false;
  };

  this.resetTemperature=function() {
    this.temperature = START_TEMPERATURE;
  };

  this.energyUsage=function() {
    if(this.temperature < LOW_THRESHOLD)

    }
  });

  // this.setCurrentTemperature=function(temperature) {
  //   if(!isMaximumTemperature(this.powerSaving, this.temperature)) {
  //     this.temperature = temperature;
  //   }
  // };

}




// Thermostat.prototype.decreaseTemperature= function() {
//   if(this.temperature > this.MIN_TEMPERATURE) {
//     this.temperature--;
//   }
