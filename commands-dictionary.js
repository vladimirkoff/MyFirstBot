const {getDay, getScheduleForToday, getWeek, getScheduleForWeek, getTime, getLesson} = require("./data");
const usersDB = require('./users')
const pairs = require('./pairs')

module.exports = commandsDictionary = {
    '/start' : async function (bot,chatID) {
        await bot.sendSticker(chatID, 'https://tlgrm.eu/_/stickers/b8e/030/b8e030b6-a4b6-3cac-b5a9-1d30c04d83d8/5.webp');
        await bot.sendMessage(chatID, `Добро пожаловать, студент КПИ!`);
        return bot.sendMessage(chatID, `Введи название своей группы в формате ХХ-ХХ`);
    },
    '/info' : async function (bot,chatID) {
        await bot.sendMessage(chatID, `С помощью этого бота ты сможешь узнать расписание на день, 
        неделю, а также узнать, сколько времени осталось до конца текущего урока`);
    },
    '/day' : async function (bot,chatID,usersDB) {
        let pairs = [];
        let message = 'Расписание на сегодня:\n';
        const week = await getWeek();
        try {
            const groupId = usersDB[chatID].groupId;
            const day = await getDay();
            pairs = await getScheduleForToday(groupId,day,week);
            pairs.pairs.forEach(pair=> {
                message = message + '—' + pair.time + ' ' + pair.teacherName + ' '+ pair.type+ ' ' + pair.name +  '\n';
                //,' ',pair.teacherName, ' ', pair.type, ' ',pair.name
            })
            await bot.sendMessage(chatID,message);
        } catch (e)
        {
            await bot.sendMessage(chatID,'Вы не обьявили свою группу');
        }
    },
    '/week': async function (bot, chatID, usersDB) {
        try {
        let message = 'Расписание на неделю: \n';
            let id = usersDB[chatID].groupId;
            let week = await getWeek();
            week++;  // Почему-то апи выдает неделю 0, из-за чего летит программа
            let schedule = await getScheduleForWeek(id, week);
            let count = 1;
            for (const day of schedule) {
                message += day.day + ':' + '\n' + '\n';
                for (const pair of day.pairs) {
                    message += count + ')'  +  pair.teacherName + '\n' + pair.name + '\n' + pair.type + '\n'  + pair.time + '\n' + '\n';
                    count++;
                }
                count = 1;
            }
            await bot.sendMessage(chatID, message)
        } catch (e) {
            await bot.sendMessage(chatID,'Вы не обьявили свою группу');
        }
    },
    '/time': async function (bot, chatID, usersDB) {

    let id = usersDB[chatID].groupId;
    let lesson = await getLesson();
    let currentTime = await getTime();
    let time = parseFloat(currentTime.replace(':', '.'))
    const startTime = pairs[lesson];
    console.log(time - startTime)
    console.log(startTime)
    console.log(currentTime)
    let hours = 1 - parseInt(currentTime.slice(0, 2)) + parseInt(startTime.slice(0, 2));
    let minutes = 30 - parseInt(currentTime.slice(3, 5)) + parseInt(startTime.slice(3, 5));
    if (hours < 0 || minutes < 0) bot.sendMessage(chatID, 'Урок уже закончился!')
    else bot.sendMessage(chatID, `До конца урока осталось ${hours} часов ${minutes} минут`)

    },

}