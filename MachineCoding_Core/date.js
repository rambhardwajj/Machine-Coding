const now = new Date()
console.log(now)

const hours = now.getHours() % 12 || 12  // for 12 hours clock
console.log(hours)

// truthy
let time  = 1 || 12
console.log(time)
time = 0 || 12
console.log(time)

// padStart function take 
let minutes = now.getMinutes().toString().padStart(2, '0'); // altest 2 value and if the values are less than 2 then 0 will be filled from the starting
console.log(minutes)

// or 
minutes= minutes<10? `0${minutes}`: `${minutes}`
console.log(minutes)

const seconds = now.getSeconds().toString().padStart(2, '0')

const ampm = now.getHours()>=12?'PM': 'AM'

timeElement.textContent = `${hours}:${minutes}:${ampm}`

