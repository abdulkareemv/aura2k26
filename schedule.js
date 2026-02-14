function showDay(day) {
  document.getElementById("day1").classList.remove("active");
  document.getElementById("day2").classList.remove("active");
  document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));

  if(day === 1){
    document.getElementById("day1").classList.add("active");
    document.querySelectorAll(".day-btn")[0].classList.add("active");
  } else {
    document.getElementById("day2").classList.add("active");
    document.querySelectorAll(".day-btn")[1].classList.add("active");
  }
}

function convertToMinutes(timeStr) {
  if (!timeStr.includes("AM") && !timeStr.includes("PM")) return null;

  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

function highlightUpcomingEvents() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const today = now.getDate();
  const month = now.getMonth() + 1; // February = 2

  // Only allow blinking on Feb 16 & 17
  if (!(month === 2 && (today === 16 || today === 17))) {
    document.querySelectorAll(".blink-time").forEach(el => {
      el.classList.remove("blink-time");
    });
    return;
  }

  const rows = document.querySelectorAll(".schedule-wrapper.active .schedule-row:not(.header)");

  rows.forEach(row => {
    const timeCell = row.children[1];
    if (!timeCell) return;

    const timeText = timeCell.innerText.trim();

    // 🚫 Skip time ranges like "9:30 AM – 4:00 PM"
    if (timeText.includes("–")) {
      timeCell.classList.remove("blink-time");
      return;
    }

    const eventMinutes = convertToMinutes(timeText);
    if (eventMinutes === null) return;

    if (currentMinutes >= eventMinutes - 60 && currentMinutes <= eventMinutes + 60) {
      timeCell.classList.add("blink-time");
    } else {
      timeCell.classList.remove("blink-time");
    }
  });
}

highlightUpcomingEvents();
setInterval(highlightUpcomingEvents, 60000);
