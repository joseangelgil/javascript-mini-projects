const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function updateCounter(){

  const christmasDay = new Date('December 25, 2024 00:00:00 GMT+0200'); // GMT+0200 = ESPAÑA
  const currentDate = new Date();
  const differenceInSeconds = (christmasDay.getTime() - currentDate.getTime()) / 1000;

  const days = Math.floor(differenceInSeconds/(3600*24));
  const hours = Math.floor(differenceInSeconds % (3600*24) / 3600);
  const minutes = Math.floor(differenceInSeconds % (3600*24) % 3600 / 60);
  const seconds = Math.floor(differenceInSeconds % (3600*24) % 3600 % 60);

  daysEl.innerText = days;
  hoursEl.innerText = hours > 9 ? hours : `0${hours}`;
  minutesEl.innerText = minutes > 9 ? minutes : `0${minutes}`;
  secondsEl.innerText = seconds > 9 ? seconds : `0${seconds}`;

}

setInterval(updateCounter, 1000);
