'use strict'

const axios = require('axios');
const {get} = require("axios");

// fetch('https://fortnite-api.com/v1/map').then( response => console.log(response.data)).catch( err => console.log(err))






  const groupName = 'ІМ-21'  // Пользователь вводит имя группы
  let id;

//   const getGroup = async() => {
//       await axios.get('https://schedule.kpi.ua/api/schedule/groups').then(res => {
//           const result = res.data.data;
//           for (const el of result) {
//               if (el.name === groupName) {
//                   id = el.id;
// console.log(id)
//               }                                 // Получаем id группы, а по нему уже смотрим расписание на день и неделю
//           }
//       });
//   }
//
//   getGroup()


  // Вот расписание на вторник для ІМ-21

// const getScheduleForToday = async() => {
//     await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?groupId=373a8219-53e0-4232-b550-ee0175941486`).then(response => {
//         console.log(response.data.data.scheduleFirstWeek[1])
//     }).catch(err => console.log(err));
// }
//
// getScheduleForToday()














// const Time = async () => {
//     const time = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Kiev').then(res => res.data.time);
//     console.log(time)
// }
//
// Time()  // Получаем текущее врея
//
// const getWeek = async() => {
//     const currentWeek = await axios.get('https://schedule.kpi.ua/api/time/current').then(res => console.log(res.data.data.currentWeek));
// }
// getWeek()   // Получаем текущую неделю
//
// const getDay = async() => {
//     const currentDay = axios.get('https://schedule.kpi.ua/api/time/current').then(res => console.log(res.data.data.currentDay));
// }
//
// getDay()  // Получаем день недели
//
// const getLesson = async() => {
//     const currentLesson = axios.get('https://schedule.kpi.ua/api/time/current').then(res => console.log(res.data.data.currentLesson));
// }
// getLesson()   // Получаем номер урока

// let currentWeek = '1'


// const getScheduleForWeek = async() => {
//     if (currentWeek === `1`) {
//         await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?groupId=373a8219-53e0-4232-b550-ee0175941486
// `).then( res => console.log(res.data.data.scheduleFirstWeek))
//     } else {
//         await axios.get(`https://schedule.kpi.ua/api/schedule/lessons?groupId=373a8219-53e0-4232-b550-ee0175941486
// `).then( res => console.log(res.data.data.scheduleSecondWeek))
//     }
//
// }
//
// getScheduleForWeek()// Расписание на неделю











