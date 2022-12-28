const TelegramApi = require('node-telegram-bot-api');
const {buttonOptions, daySchedule} = require('./options');
const {firstWeek} = require('./schedule');
const token = '5961793778:AAHmaqiJnYGMoh5aPnsbv3MdtYIR012Bdjc';
const bot = new TelegramApi(token, {polling: true});


const start =   () => {



     bot.setMyCommands([
        {command: '/start', description: 'Запустить бота'},
        {command: '/info', description: 'Информация'},
        {command: '/week', description: 'Выбрать неделю'},
    ])

     bot.on('message', async msg => {
    const text = msg.text;     // получаем сообщение, которое отправил польз
    const chatID = msg.chat.id;  // получем айди чата
    if (text === '/start') {
        await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/b8e/030/b8e030b6-a4b6-3cac-b5a9-1d30c04d83d8/5.webp')
        await bot.sendMessage(chatID, `Добро пожаловать, студент КПИ!`)
    }
     if (text === '/info') return bot.sendMessage(chatID, `С помощью этого бота ты сможешь узнать расписание на день, неделю, а также узнать, сколько времени осталось до конца текущего урока`)
     if (text === '/week') {
        await bot.sendMessage(chatID, 'Выбери неделю', buttonOptions);
        console.log(msg)
        }
    else return bot.sendMessage(chatID, 'Не знаю такой комманды!');
        console.log(msg)
    })
    //  bot.on('callback_query',  msg => {
    //     const id = msg.message.chat.id;
    //     const week = msg.data;
    //     return bot.sendMessage(id, 'Что дальше?', daySchedule)
    // })
}


//${firstWeek[day][1]}\n ${firstWeek[day][2]}\n ${firstWeek[day][3]}\n

start();