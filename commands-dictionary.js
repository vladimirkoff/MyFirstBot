const {getDay, getScheduleForToday, getWeek, getScheduleForWeek, getTime} = require("./data");
const usersDB = require('./users')

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
        console.log(usersDB)
        let pairs = [];
        let message = 'Расписание на сегодня:\n';
        const week = await getWeek();
        try{
            const groupId = usersDB[chatID].groupId;
            const day = await getDay();
            pairs = await getScheduleForToday(groupId,day,week);
        }catch (e)
        {
            await bot.sendMessage(chatID,'Вы не обьявили свою группу');
        }
        console.log(pairs.pairs);
        pairs.pairs.forEach(pair=> {
            message = message + '—'+pair.time + ' '+pair.teacherName+ ' '+ pair.type+ ' '+pair.name+'\n';
            //,' ',pair.teacherName, ' ', pair.type, ' ',pair.name
        })
        await bot.sendMessage(chatID,message);
    },
    '/week': async function(bot, chatID, usersDB) {
        console.log(usersDB)
        let message = 'Расписание на неделю: \n';
        try {
            let id = usersDB[chatID].groupId;
            let week = await getWeek();
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
            console.log(schedule[0].pairs);
            console.log(schedule);

        } catch (e) {console.log('Error')}
        await bot.sendMessage(chatID, 'It is schedule for week')
        await bot.sendMessage(chatID, message)
    },
    '/time': async function(bot, chatID, usersDB) {
        const day = await getDay();
        let id = usersDB[chatID].groupId;
        const time = await getTime();
        let week = await getWeek();
        console.log(time)
        await bot.sendMessage(chatID, 'Time')
    }

}