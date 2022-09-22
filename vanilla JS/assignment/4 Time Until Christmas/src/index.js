const clockTitle = document.querySelector(".js-clock");

function refrash() {
  let now = new Date();
  let christmas = new Date(2021, 11, 25);

  let gapSecond = christmas.getTime() - now.getTime();

  let day = gapSecond / (3600 * 24 * 1000);
  let remainderDay = gapSecond % (3600 * 24 * 1000);

  let hour = remainderDay / (3600 * 1000);
  let remainderHour = remainderDay % (3600 * 1000);

  let minute = remainderHour / (60 * 1000);
  let remainderMinut = remainderHour % (60 * 1000);

  let second = remainderMinut / 1000;
  day = String(Math.floor(day));
  hour = String(Math.floor(hour)).padStart(2, "0");
  minute = String(Math.floor(minute)).padStart(2, "0");
  second = String(Math.floor(second)).padStart(2, "0");
  clockTitle.textContent = second;
  clockTitle.textContent = `D-DAY : ${day}d ${hour}h ${minute}m ${second}s`;
}
refrash();
setInterval(refrash, 1000);
