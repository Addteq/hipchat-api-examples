var hipchat = require('node-hipchat');

var HC = new hipchat(process.env.HIPCHAT_ADMIN_TOKEN);

HC.listRooms(function(data) {
  console.log(data); // These are all the rooms
});
