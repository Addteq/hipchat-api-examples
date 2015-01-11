function writeToScreen(screen, message) {
  screen.setCursor(0,0);
  screen.write(message);
}

var Cylon = require('cylon');

Cylon
  .robot()
  .connection('edison', { adaptor: 'intel-iot' })
  .device('led', { driver: 'led', pin: 4, connection: 'edison' })
  .device('touch', { driver: 'button', pin: 3, connection: 'edison' })
  .device('screen', { driver: 'upm-jhd1313m1', connection: 'edison' })
  .on('ready', function(my) {
    my.touch.on('press', function() {
	 console.log('detected press');
         writeToScreen(my.screen, "Press!");
         my.led.turnOn();
    });

    my.touch.on('release', function() {
	console.log('touch released');
         writeToScreen(my.screen, "Release!");
         my.led.turnOff();
    });
  });

Cylon.start();
