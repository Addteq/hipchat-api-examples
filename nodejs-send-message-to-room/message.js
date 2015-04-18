var hipchat = require('node-hipchat');

var HC = new hipchat(process.env.HIPCHAT_ADMIN_TOKEN);

var params = {
  room: 959511, // Found in the JSON response from the call above
  from: 'ROBOT',
  message: 'Release the <strong>Kraken!</strong>',
  color: 'red'
};

HC.postMessage(params, function(data) {
  // Message has been sent!
});
