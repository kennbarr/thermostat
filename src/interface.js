'use strict';

$(document).ready(function(){

  thermostat = new Thermostat();
  var thermostat;

  apiCall();

  function updateTemperature() {
    $('body').attr('class','c'+ thermostat.getCurrentTemperature());
  }

  updateTemperature();
  thermostat.powerSaving ? $('#PSM_status').text('on') : $('#PSM_status').text('off');

  $('#increase').on('click', function(){
    thermostat.increaseTemperature();
    updateTemperature();
    g.refresh(thermostat.getCurrentTemperature());
  })

  $('#decrease').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
    g.refresh(thermostat.getCurrentTemperature());
  })

  $('#reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
    g.refresh(thermostat.getCurrentTemperature());
  })

  $('#PSM_on').on('click', function(){
    thermostat.enablePowerSavingMode();
    updateTemperature();
    $('#PSM_status').text('on')
    g.refresh(thermostat.getCurrentTemperature());
  })

  $('#PSM_off').on('click', function(){
    thermostat.disablePowerSavingMode();
    $('#PSM_status').text('off')
  })


  function apiCall()  {
    var stateCity;
    var city;
    stateCity = $('#city_list').val();
    city = $("option[value='" + stateCity + "']").text();
    $('#city').text(city);


    $.ajax({
      url : "http://api.wunderground.com/api/47d299c55b24b723/geolookup/conditions/q/" + stateCity + ".json",
      dataType : "jsonp",
      success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp_c = parsed_json['current_observation']['temp_c'];
        $('#city_temp').text(temp_c);
      }
    });
  }

  $('#city_list').change(function(){
    apiCall();
  });

  var g = new JustGage({
    id: "gauge",
    value: 20,
    min: 10,
    max: 32,
    title: "Thermostat"
  });

});
