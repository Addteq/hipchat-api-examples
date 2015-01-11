# Generate ADMIN and Notification tokens for hipchat
* Generate Hipchat ADMIN token: https://YOURACCOUNT.hipchat.com/admin/api --> Create new Token --> Type "Admin"
* Generate Hipchat Notification token: HipChat.com > Rooms tab > Click the room you want > Select Tokens on the left-hand side > generate a new token

# Running example
* npm install  hipchatter --save
* export HIPCHAT_NOTIFICATION_TOKEN=<Enter your notification token>
* export HIPCHAT_ADMIN_TOKEN=<Enter your admin token>
* Create a room called "demo" or modify message.js and change it to the name of your chat room
* node message.js

You should see a message in your Hipchat Room in red color
