const alarmContainer = document.querySelector('.js-alarm');
const currentTime = alarmContainer.querySelector('h2');
const setTime = alarmContainer.querySelector('input');

function getAlarm(){
  const setValue = setTime.value;
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  if(current === setValue){
    window.open('popup.html');
  clearInterval(alarm);
  }
}

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
  alarm = setInterval(getAlarm, 1000);
}

init();