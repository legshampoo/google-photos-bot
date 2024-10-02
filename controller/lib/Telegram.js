const { getAxiosInstance } = require('./axios');

function sendMessage(messageObj, messageText) {
    return getAxiosInstance.get('sendMessage', {
        chat_id: messageObj.chat.id,
        text: messageText,
  });
}

function handleMessage(messageObj) {
    const messageText = messageObj.text || '';

    if(messageText.charAt(0) == '/') {
        const command = messageText.substring(1);

        switch(command) {
            case 'start':
                return sendMessage(
                    messageObj, 
                    "Hi! I'm a bot.  I can help you to get started"
                );
                
            case 'test': 
                //handle the case
                return;

            case 'surprise':
                //handle the case
                return;

            default:
                return sendMessage(
                    messageObj,
                    "I don't know that command"
                );
        }
    } else {
        // we can send same message back to the user
        return sendMessage(messageObj, messageText);
    }
}

module.exports = { handleMessage };