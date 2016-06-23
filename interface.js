$(document).ready(function(){

  thermostat = new Thermostat();

  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.upButton();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.downButton();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function(){
    thermostat.turnPowerSavingOn();
    updateTemperature();
    $('#power-saving-status').text('on');
  })

  $('#powersaving-off').on('click', function(){
    thermostat.turnPowerSavingOff();
    updateTemperature();
    $('#power-saving-status').text('off');
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});
