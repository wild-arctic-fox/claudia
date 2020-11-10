const botBuilder = require('claudia-bot-builder')


module.exports = botBuilder(message => {
    console.log(JSON.stringify(message));
    const { sender, type: typeT, originalRequest: { update_id, message: {
        message_id,
        from: {
            id: f_id, first_name, is_bot, username, language_code
        },
        chat: {
            id, type
        },
        date,
        text
    } } } = message;
    let d = new Date(date*1000);
    d = d.toISOString();

    return `
    HELLO 2
   "sender": ${sender},
    "text": ${text},
    "originalRequest": {
        "update_id": ${update_id}
        "message": {
            "message_id": ${message_id},
            "from": {
                "id": ${f_id},
                "is_bot": ${is_bot},
                "first_name": ${first_name},
                "username": ${username},
                "language_code": ${language_code}
            },
            "chat": {
                "id": ${id},
                "first_name": ${first_name},
                "username": ${username},
                "type": ${type}
            },
            "date": ${d},
            "text": ${text},
        }
    },
    "type": ${typeT}
 `
}, {
    platforms: ['telegram']
})
