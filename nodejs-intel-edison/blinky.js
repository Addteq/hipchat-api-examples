var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter(process.env.HIPCHAT_AUTH_TOKEN);

console.log('AUTH TOKEN: ' + process.env.HIPCHAT_AUTH_TOKEN);

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

       hipchatter.history('demo', function(err, history){
       // print the last message
         if (err){
	  console.log(err);
       }
       else {
    	  //console.log(history);
    	  lastMessage = history.items[history.items.length-1].message;
          writeToScreen(my.screen, lastMessage);
       }
      });
         
         my.led.turnOn();
    });

    my.touch.on('release', function() {
	 console.log('touch released');
         writeToScreen(my.screen, "                ");
         my.led.turnOff();
    });
  });

Cylon.start();
