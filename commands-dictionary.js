const {getDay, getScheduleForToday} = require("./data");

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
        try{
            const groupId = usersDB[chatID].groupId;
            const day = await getDay();
            pairs = await getScheduleForToday(groupId,day);
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
    }

}