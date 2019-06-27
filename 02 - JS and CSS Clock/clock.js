function getTime() {
    const hoursHand = document.querySelector('.hour-hand');
    const minutesHand = document.querySelector('.min-hand');
    const secondsHand = document.querySelector('.second-hand');

    date = new Date();
    const seconds = date.getSeconds();
    const secondDegree = ((seconds / 60) * 360);

    const minutes = date.getMinutes();
    const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;

    const hours = date.getHours();
    const hourDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    hoursHand.style.setProperty("transform", `rotate(${hourDegree}deg)`);
    minutesHand.style.setProperty("transform", `rotate(${minuteDegree}deg)`);
    secondsHand.style.setProperty("transform", `rotate(${secondDegree}deg)`);
}

function doRepeat() {
    setInterval(getTime, 1000);
}

doRepeat();