'use strict';

$(document).ready(function(){

  thermostat = new Thermostat();
  var thermostat;
  displayWeather('London');
  $('#gauge').attr('class', 'gauge_psm_on');

  var g = new JustGage({
    id: "gauge",
    value: 20,
    min: 10,
    max: 32,
    title: "Thermostat"
  });

  function updateTemperature() {
    $('body').attr('class','c'+ thermostat.getCurrentTemperature());
    g.refresh(thermostat.getCurrentTemperature());
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

  $('#psm_button').on('click', function(){
    if($('#psm_button').text() === 'on')  {
      thermostat.disablePowerSavingMode();
      $('#psm_button').text('off');
      $('#psm_button').attr('class', 'psm_button_2');
      $('#gauge').attr('class', 'gauge_psm_off');
    }
    else {
      thermostat.enablePowerSavingMode();
      $('#psm_button').text('on');
      $('#psm_button').attr('class', 'psm_button_1');
      $('#gauge').attr('class', 'gauge_psm_on');
      updateTemperature();
    }
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=8e25c796c23b9765ac1d2e03fda14d71';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('.cityTemp').text(data.main.temp.toFixed(1));
   });
   $('.cityName').text(city)
 }

});
