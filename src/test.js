const { computeSegEndResizable } = require("@fullcalendar/react");

dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
obj = [
  { day: "Monday", time: "22:00" },
  { day: "Thursday", time: "12:00" },
  { day: "Thursday", time: "13:00" },
  { day: "Saturday", time: "17:00" },
];

date = new Date("2022-07-11");

sessionsCount = 16;

//calculate pointer
start_day = dayArray[date.getDay()];
pointer = obj.map((object) => object.day).indexOf(start_day);

while (sessionsCount !== 0) {
  console.log(pointer);
  flag = true;
  index = 0;
  while (flag) {
    dayIndex = date.getDay();
    day = dayArray[dayIndex];

    if (obj[pointer]["day"] == day) {
      console.log("Found it");
      console.log(date.toISOString());
      flag = false;
      sessionsCount--;
      if (pointer == obj.length-1) {
        pointer = 0;
      } else {
        pointer++;
      }
    } else {
      date.setDate(date.getDate() + 1);
    }
  }
}
