#!/bin/bash
 
# Set the ROOM_ID & AUTH_TOKEN variables below.
# Further instructions at https://www.hipchat.com/docs/apiv2/auth

#make sure to export the variables to the bash shell before you run the script!
#export HIPCHAT_ROOM='959511'
## personal hipchat token below, the admin will NOT work
#export HIPCHAT_ADMIN_TOKEN='SEU1yiAzepcC5YXvTPlYNugfwAkXsMD7aLfIqEYF'

 
ROOM_ID=$HIPCHAT_ROOM
AUTH_TOKEN=$HIPCHAT_ADMIN_TOKEN
MESSAGE=$1
 
curl -H "Content-Type: application/json" \
-X POST \
-d "{\"color\": \"purple\", \"message_format\": \"text\", \"message\": \"$MESSAGE\" }" \
https://api.hipchat.com/v2/room/$ROOM_ID/notification?auth_token=$AUTH_TOKEN

