var Cylon = require('cylon');

function writeToScreen(screen, message) {
  screen.setCursor(0,0);
  screen.write(message);
}

Cylon
  .robot({ name: 'SometimesWarmbutChillBot'})

  .connection('edison', { adaptor: 'intel-iot' })

  .device('sensor', { driver: 'analogSensor', pin: 0, connection: 'edison' })
  .device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })

  .on('ready', function(my) {
    var ready = false;
    var sensorVal = 0;

    writeToScreen(my.screen, "Ready!");

    my.sensor.on('analogRead', function(data) {
      sensorVal = data;
      console.log('Temperature Sensor Value:' + sensorVal);
    });

    setInterval(function() {
      if (ready) {
        var toSend = {
          analogSensor: sensorVal
        };
        if (err != null) {
          console.log("Error sending analog sensor information: " + err);
        }
      }
    }, 2000);
  })
  .start();
