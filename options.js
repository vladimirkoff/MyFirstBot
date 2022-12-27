module.exports = {
     buttonOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Неделя 1', callback_data: '1'}, {text: 'Неделя 2', callback_data: '2'}]
            ]
        })
    },
    daySchedule: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Расписание на сегодня', callback_data: 'first'}],
                [{text: 'Расписание на неделю', callback_data: 'second'}],
                [{text: 'Сколько осталось до конца', callback_data: 'third'}]
            ]
        })
    },
}
