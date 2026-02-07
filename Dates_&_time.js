let myDate = new Date()
console.log(myDate) // 2026-01-25T13:37:51.289Z
console.log(myDate.toString()); //Sun Jan 25 2026 19:09:29 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Jan 25 2026
console.log(myDate.toISOString()); //2026-01-25T13:40:33.908Z
console.log(myDate.toLocaleDateString()); //25/1/2026



let newDate = new Date(2023, 4, 12, 5, 6)
console.log(newDate.toLocaleString()); //12/5/2023, 5:06:00 am


let newwDate = new Date(2026, 0, 25)
console.log(newwDate.getDate()); //25

console.log(newwDate.toLocaleString('default', {
    weekday: 'narrow', //S
    day: "2-digit"
}));





