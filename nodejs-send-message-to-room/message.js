var Hipchatter = require('hipchatter');
var hipchatter = new Hipchatter(process.env.HIPCHAT_ADMIN_TOKEN);

hipchatter.notify('demo', 
    {
        message: 'Release the <strong>Kraken!</strong>',
        color: 'red',
        token: process.env.HIPCHAT_NOTIFICATION_TOKEN
    }, function(err){
        if (err == null) console.log('Successfully notified the room.');
});
