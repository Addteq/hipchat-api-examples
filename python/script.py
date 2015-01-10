
import hipchat, os,sys


token=os.environ['HIPCHAT_ADMIN_TOKEN']
hipster = hipchat.HipChat(token = token)

room_id = os.environ['HIPCHAT_ROOM']
from_name = 'PYTHON GAI'
message = 'AM FIRIN WITH MA LASER'


hipster.message_room(room_id, from_name, message)

# per HipChat, color can be "yellow", "red", "green", "purple", "gray", or "random"
message_color = 'gray'
hipster.message_room(room_id, from_name, message, color=message_color)

# notify users in the room
message_color = 'red'
hipster.message_room(room_id, from_name, message, color=message_color, notify=True)
