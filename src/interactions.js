$( document ).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temp-up').on('click', function(){
      thermostat.increaseTemp();
      updateTemperature();
    });

    $('#temp-down').click(function(){
      thermostat.decreseTemp();
      updateTemperature();
    });

    function updateTemperature(){
      $('#temperature').text(thermostat.temp);
      $('#temperature').attr('class', thermostat.energyUsage());
    }

    $('#temp-reset').click(function(){
      thermostat.reset();
      $('#temp-reset').text(thermostat.reset);
      updateTemperature();
    });

    $('#psm-on').click(function(){
      thermostat.turnPowerSaveOn();
      $('#psm-status').text('on');
      updateTemperature();
    });

    $('#psm-off').click(function(){
      thermostat.turnPowerSaveOff('off');
      $('#psm-status').text('off');
      updateTemperature();
    });


});
