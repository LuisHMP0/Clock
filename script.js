const updateTime = () => {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');


    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    hoursInput.textContent = hours;
    minutesInput.textContent = minutes;
    secondsInput.textContent = seconds;
    
}

setInterval(updateTime, 1000);
updateTime()

