let duration = 2 * 24 * 60 * 60; // يومين بالثواني
let endTime;

// لو مفيش وقت محفوظ نحفظه
if (!localStorage.getItem("countdownEnd")) {
  endTime = Date.now() + duration * 1000;
  localStorage.setItem("countdownEnd", endTime);
} else {
  endTime = localStorage.getItem("countdownEnd");
}

function startCountdown() {

  let interval = setInterval(() => {

    let now = Date.now();
    let counter = Math.floor((endTime - now) / 1000);

    if (counter < 0) {
      clearInterval(interval);

      let popup = document.createElement("div");
      popup.className = "popup";
      popup.textContent = "🎉 The Event Has Finished!";
      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.add("show");
      }, 100);

      setTimeout(() => {
        popup.remove();

        // إعادة العداد
        endTime = Date.now() + duration * 1000;
        localStorage.setItem("countdownEnd", endTime);

        startCountdown();
      }, 2000);

      return;
    }

    let days = Math.floor(counter / (24 * 60 * 60));
    let hours = Math.floor((counter % (24 * 60 * 60)) / (60 * 60));
    let minutes = Math.floor((counter % (60 * 60)) / 60);
    let seconds = counter % 60;

    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".minutes").textContent = minutes;
    document.querySelector(".seconds").textContent = seconds;

  }, 1000);

}

startCountdown();




let btn = document.querySelector(".btn-up");

window.onscroll = function () {

    if (window.scrollY > 1000) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }

};
