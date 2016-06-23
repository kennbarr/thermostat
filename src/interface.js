'use strict';

$(document).ready(function(){

  var thermostat;
  thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class',thermostat.energyUsage());
  }

  updateTemperature();
  thermostat.powerSaving ? $('#PSM_status').text('on') : $('#PSM_status').text('off');

  $('#increase').on('click', function(){
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#decrease').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#PSM_on').on('click', function(){
    thermostat.enablePowerSavingMode();
    updateTemperature();
    $('#PSM_status').text('on')
  })

  $('#PSM_off').on('click', function(){
    thermostat.disablePowerSavingMode();
    $('#PSM_status').text('off')
  })


});
