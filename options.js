module.exports = {
     buttonOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Неделя 1', callback_data: '1'}, {text: 'Неделя 2', callback_data: '2'}]
            ]
        })
    }
}