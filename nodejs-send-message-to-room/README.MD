# Generate ADMIN and Notification tokens for hipchat
* Signup for free account at https://hipchat.com
* Create your chat room!
* Generate Hipchat ADMIN token: https://YOURACCOUNT.hipchat.com/admin/api --> Create new Token --> Type "Admin"

# Setup
* npm install  
* export HIPCHAT_ADMIN_TOKEN=<Enter your admin token from the one you generated above>

## List all the chat rooms
* node listrooms.js

## Send message to the chat room
* You need to run example above to get the room id number for your chat room.
* Modify message.js to modify the chat room id and message.
* Run the example using the command: node message.js

You should see a message in your Hipchat Room in red color
