# SETUP

* Install Vagrant on your PC/Mac: https://www.vagrantup.com/downloads.html
* git clone https://bitbucket.org/atlassianlabs/ac-koa-hipchat-vagrant
* cd ac-koa-hipchat-vagrant
* vagrant up
* vagrant ssh
* cd project
* npm run web-dev
* Last command will give you a url similar to https://6040d207.ngrok.com Go to your browser to https://6040d207.ngrok.com/addon/capabilities to confirm it displays some JSON output
* Sign up for your chat room at hipchat.com to get https://youraccount.hipchat.com and create a test chat room
* Goto https://youraccount.hipchat.com/admin/addons and click on "Build and install your own integration" and in the integration url enter: https://6040d207.ngrok.com/addon/capabilities (PS: Your URL will be unique but something.ngrok.com)

# Running Example
* Go to your test chat room where the bot is enabled.
* In the room type: /hello
* The bot should reply with "Hello Your Name"
