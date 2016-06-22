'use strict';

function Thermostat() {
  this._temperature = 20;
  this._MIN_TEMPERATURE = 10;
  this.isPowerSavingOn = true;
  this._max_temperature = 25;
}

Thermostat.prototype = {
  getTemperature: function()  {
    return this._temperature;
  },
  upButton: function()  {
    if(this._temperature === this._max_temperature){
      return;
    }
    this._temperature++;
  },
  downButton: function()  {
    if(this._temperature === this._MIN_TEMPERATURE)  {
      return;
    }
    this._temperature--;
  },
  isPowerSaving: function() {
    return this.isPowerSavingOn;
  },
  turnPowerSavingOn: function() {
    this._max_temperature = 25;
    this.isPowerSavingOn = true;
    if(this._temperature > 25)  {
      this._temperature = 25;
    }
  },
  turnPowerSavingOff: function() {
    this._max_temperature = 32;
    this.isPowerSavingOn = false;
  },
  resetTemperature: function()  {
    this._temperature = 20;
  },
  energyUsage: function() {
    if(this._temperature < 18)  {
      return "low-energy";
    }
    if(this._temperature < 25) {
      return "medium-energy";
    }
    return "high-energy";
  }



};
