![Demo](https://github.com/Addteq/hipchat-api-examples/raw/master/nodejs-intel-edison/animated.gif)

# Generate personal token for hipchat
* Generate Hipchat auth token: https://YOURACCOUNT.hipchat.com/account/api

# Running example on Intel Edison
* npm install  hipchatter --save
* export HIPCHAT_AUTH_TOKEN=<Enter your notification token>
* Create a room called "demo" or modify message.js and change it to the name of your chat room
* node message.js
* Type a message in the chat room
* Press on the touch sensor, the LCD screen will display your message
* Repeat for fun
