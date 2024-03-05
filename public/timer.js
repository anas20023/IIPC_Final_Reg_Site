let dys = document.querySelector("#days");
let hrs = document.querySelector("#hrs");
let mints = document.querySelector("#mins");
let secs = document.querySelector("#secs");
const timer_div = document.getElementById("timer_div");

document.addEventListener("DOMContentLoaded", function () {

  const targetDate = new Date("March 16, 2024 23:59:59").getTime();

  const countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const currentDate = new Date().getTime();

    const remainingTime = targetDate - currentDate;


    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    dys.innerHTML = `${days}`;
    hrs.innerHTML = `${hours}`;
    mints.innerHTML = `${minutes}`;
    secs.innerHTML = `${seconds}`;


    if (remainingTime < 0) {
      timer_div.classList.remove("flex");
      timer_div.classList.add("hidden");
      document.getElementById("Last_date").innerHTML = "Registration Time expired!";
    }
  }
});
