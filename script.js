const day = document.getElementById("day");
const utcTime = document.getElementById("utc-time");

// Get current day of the week

function getCurrentDay() {
//   const dayOfWeekDigit = new Date().getDay();
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });
  return dayOfWeekName;
}

// Get UTC
function getUTCTime() {
  var newDate = new Date();
  // Get current day of the week
  var UTCTime = new Date(
    newDate.getUTCFullYear(),
    newDate.getUTCMonth(),
    newDate.getUTCDate(),
    newDate.getUTCHours(),
    newDate.getUTCMinutes(),
    newDate.getUTCSeconds()
  );
  const currentUTCTime = UTCTime.toUTCString().slice(17);
  return currentUTCTime.slice(0, -3);
}

window.onload = () => {
  day.innerHTML = getCurrentDay();
  utcTime.innerHTML = getUTCTime();
};
