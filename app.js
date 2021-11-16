const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor((seconds / 3600) / 24);

    const hours = Math.floor((seconds / 3600) % 24);

    const minutes = Math.floor((seconds / 60) % 60);

    const secondsLeft = Math.floor(seconds) % 60;

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = secondsLeft
}

// countdown()

setInterval(countdown, 1000);

// document.getElementById('days-c').innerHTML = days;