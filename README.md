
from the tutorial

creating a telegram bot using node js 
from lets build together
https://www.youtube.com/watch?v=COLDiMlmcoI

uses ngrok as the https server
first run
ngrok http 4040 (PORT)

then open the url it gives you to see the requests
found in the 'forwarding' url

https://dashboard.ngrok.com/get-started/setup/macos

use postman to set webhook

`https://api.telegram.org/bot${MY_TOKEN}/${method}`;

URL to use in postman

you have to do this every time you start ngrok if it crashes
remove the brackets, should look like
bot73859...
https://api.telegram.org/bot{TELEGRAM_TOKEN}/setWebhook?url=https://fc21-2403-6200-8870-160a-d5d1-eba6-e910-5db2.ngrok-free.app/

