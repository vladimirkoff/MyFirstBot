const TelegramApi = require('node-telegram-bot-api');
const {gameOptions} = require('./options');
const token = '5961793778:AAHmaqiJnYGMoh5aPnsbv3MdtYIR012Bdjc';

const bot = new TelegramApi(token, {polling: true});


const chats = {};





const start =  () => {





    bot.setMyCommands([
        {command: '/start', description: 'Приветствие'},
        {command: '/info', description: 'Информация'},
        {command: '/game', description: 'Game'},

    ])

    bot.on('message', async msg => {
    const text = msg.text;     // получаем сообщение, которое отправил польз
    const chatID = msg.chat.id;  // получем айди
    if (text === '/start') {
        await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/b8e/030/b8e030b6-a4b6-3cac-b5a9-1d30c04d83d8/5.webp')
        return bot.sendMessage(chatID, `Welcome!`)
    }
    if (text === '/info') return bot.sendMessage(chatID, `Your id is  ${msg.chat.id}!`)
    if (text === '/game') {
        await bot.sendMessage(chatID, 'Сейчас я загадаю число от 0 до 9');

       return bot.sendMessage(chatID, 'Отгадай', gameOptions)

    }
    else return bot.sendMessage(chatID, 'Invalid command');
        console.log(msg)
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const ID = msg.message.chat.id;
        const num = Math.floor(Math.random() * 10);

        chats[ID] = num.toString();
        await bot.sendMessage(ID, `Ты нажал на ${data}`);
        if (data === chats[ID])  return bot.sendMessage(ID, 'Угадал!')
        else  return bot.sendMessage(ID, `Нет, бот загадал цифру ${chats[ID]}`)
        console.log(msg)
    })
}

start();