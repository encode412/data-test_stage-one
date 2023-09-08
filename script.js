// DOM elements
const day = document.getElementById("day");
const utcTime = document.getElementById("utc-time");

// Get current day of the week
function getCurrentDay() {
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });
  return dayOfWeekName;
}

// Get Current UTC Time
function getUTCTime() {
  var now = new Date();
  var time = now.getTime();
  var offset = now.getTimezoneOffset();
  offset = offset * 60000;
  return time - offset;
}

// Set Time and day to Window Object
window.onload = () => {
  day.innerHTML = getCurrentDay();
  utcTime.innerHTML = getUTCTime();
};
