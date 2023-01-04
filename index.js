const TelegramApi = require('node-telegram-bot-api');
const token = '5961793778:AAHmaqiJnYGMoh5aPnsbv3MdtYIR012Bdjc';
const bot = new TelegramApi(token, {polling: true});

const commandsDictionary = require('./commands-dictionary');   // ?
let usersDB = require('./users');                               // ?
const {getGroup} = require("./data");



const start =   () => {
    console.log('bot started');
    bot.setMyCommands([
        {command: '/start', description: 'Запустить бота'},
        {command: '/info', description: 'Информация'},
        {command: '/day', description: 'Расписание на сегодня'},
        {command: '/week', description: 'Расписание на неделю'},
        {command: '/time',description: 'Показывает время до конца урока'},
        {command: '/now',description: 'Показывает текущий урок'},
    ])

    bot.on('message', async msg => {
        const text = msg.text;     // получаем сообщение, которое отправил польз
        const chatID = msg.chat.id;  // получем айди чата
        if(text.split('').indexOf('-') === 2){
            let groupId = await getGroup(text);
            usersDB[chatID] = {};
            usersDB[chatID].groupId = groupId;
            console.log(usersDB)
            bot.sendMessage(chatID,'Я запомнил');
            // console.log(usersDB[chatID]);
        }
        try
        {
            commandsDictionary[text](bot,chatID,usersDB);
        } catch (e){ 'Error occured!'}
    })
}

start();

