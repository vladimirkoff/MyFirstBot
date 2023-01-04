'use strict'

const axios = require('axios');
const {get} = require("axios");

// fetch('https://fortnite-api.com/v1/map').then( response => console.log(response.data)).catch( err => console.log(err))






// const groupName = 'ІМ-21'  // Пользователь вводит имя группы


const getGroup = async(groupName) => {
    let id;
    await axios.get('https://schedule.kpi.ua/api/schedule/groups').then(res => {
        const result = res.data.data;
        for (const el of result) {
            if (el.name === groupName) {
                id = el.id;
            }                                 // Получаем id группы, а по нему уже смотрим расписание на день и неделю
        }
    });
    return id;
}


// Вот расписание на вторник для ІМ-21






//
const getTime = async () => {
  return await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Kiev').then(res => res.data.time);
}
//
// Time()  // Получаем текущее врея
//
const getWeek = async() => {
  return await axios.get('https://schedule.kpi.ua/api/time/current').then(res => res.data.data.currentWeek);
}
// getWeek()   // Получаем текущую неделю
//
const getDay = async() => {
    const currentDay = await axios.get('https://schedule.kpi.ua/api/time/current')
        .then(res => res.data.data.currentDay-1);
    return currentDay;
}

const getScheduleForToday = async(groupId,day, week) => {
    if (week === 1) {
        return await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?`,{
            params: {
                groupId : groupId,
            }
        }).then(response => {
            return response.data.data.scheduleFirstWeek[day]
        }).catch(err => console.log(err));
    } else
        return await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?`,{
            params: {
                groupId : groupId,
            }
        }).then(response => {
            return response.data.data.scheduleSecondWeek[day]
        }).catch(err => console.log(err));
}


const getScheduleForWeek = async(groupId, week) => {
  if (week === 1) {
    return await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?groupId=${groupId}
`).then( res => res.data.data.scheduleFirstWeek)
  } else {
    await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?groupId=${groupId}
`).then( res => res.data.data.scheduleSecondWeek)
  }
}













const getLesson = async() => {
    return await axios.get('https://schedule.kpi.ua/api/time/current').then(res => res.data.data.currentLesson);
}






module.exports = {getGroup, getDay, getScheduleForToday, getWeek, getScheduleForWeek, getTime, getLesson}


const test = async(groupId,day = 3, week = 1) => {
    if (week === 1) {
        return await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?`,{
            params: {
                groupId : groupId,
            }
        }).then(response => {
            console.log(response.data.data.scheduleFirstWeek[day])
        }).catch(err => console.log(err));
    } else
        return await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?`,{
            params: {
                groupId : groupId,
            }
        }).then(response => {
            return response.data.data.scheduleSecondWeek[day]
        }).catch(err => console.log(err));
}

test('373a8219-53e0-4232-b550-ee0175941486')