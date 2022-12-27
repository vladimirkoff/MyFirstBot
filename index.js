const TelegramApi = require('node-telegram-bot-api');
const {buttonOptions, daySchedule} = require('./options');
const {firstWeek} = require('./schedule');
const token = '5961793778:AAHmaqiJnYGMoh5aPnsbv3MdtYIR012Bdjc';
const bot = new TelegramApi(token, {polling: true});




const start =  () => {

  var week;

    bot.setMyCommands([
        {command: '/start', description: 'Запустить бота'},
        {command: '/info', description: 'Информация'},
        {command: '/week', description: 'Выбрать неделю'},
    ])

    bot.on('message', async msg => {
    const text = msg.text;     // получаем сообщение, которое отправил польз
    const chatID = msg.chat.id;  // получем айди
    if (text === '/start') {
        await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/b8e/030/b8e030b6-a4b6-3cac-b5a9-1d30c04d83d8/5.webp')
        return bot.sendMessage(chatID, `Добро пожаловать, студент КПИ!`)
    }
    else if (text === '/info') return bot.sendMessage(chatID, `С помощью этого бота ты сможешь узнать расписание на день, неделю, а также узнать, сколько времени осталось до конца текущего урока`)
    else if (text === '/week') {
        await bot.sendMessage()
    }


    else return bot.sendMessage(chatID, 'Не знаю такой комманды!');
        console.log(msg)
    })

}


//${firstWeek[day][1]}\n ${firstWeek[day][2]}\n ${firstWeek[day][3]}\n

start();