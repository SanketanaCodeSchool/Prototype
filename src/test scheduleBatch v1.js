const getDateTime = (date, time, duration) => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");
  const seconds = "00";

  //timeString = "2020-06-10T10:00:00.000";
  let timeString = date.slice(0, 11) + time + ":00";
  var startDate = new Date(timeString);
  let msDuration = duration * 60000;
  var endDate = new Date(startDate.getTime() + msDuration);
  var isoStartDate = new Date(
    startDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000
  )
    .toISOString()
    .split(".")[0];
  var isoEndDate = new Date(
    endDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000
  )
    .toISOString()
    .split(".")[0];

  return [isoStartDate, isoEndDate];
};

const scheduleBatch = (batch) => {
  dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(batch.start_date);
  let schedule = batch.schedule;
  //calculate schedulePointer for schedule
  //"day" of the start_date
  start_day = dayArray[date.getDay()];
  //set the schedulePointer to the index of the first occurrence of
  //the object whose "day" matches the "start_day"
  schedulePointer = schedule.map((object) => object.day).indexOf(start_day);
  //number of events to be created
  let sessionCount = batch.sessionCount;
  let event;
  while (sessionCount !== 0) {
    //flag is set to false after every event creation
    let flag = true;
    while (flag) {
      //get "day" of the "date"
      dayIndex = date.getDay();
      //get the day "index" , eg "Sunday" = 0 , "Monday" = 1.
      day = dayArray[dayIndex];
      //if the date's day is matches the pointed object's "day", schedule it.
      if (schedule[schedulePointer]["day"] == day) {
        let startTime = schedule[schedulePointer]["time"];
        let duration = schedule[schedulePointer]["duration"];
        let ISODate = date.toISOString();
        let [isoStartDate, isoEndDate] = getDateTime(
          ISODate,
          startTime,
          duration
        );
        let timeZone = "IST";
        //set flag to false if next event's date is found
        flag = false;
        let event = {
          eventName: batch.batch_id + " " + batch.teacher_name,
          description:
            batch.teacher_name + "'s " + batch.course_name + " batch.",
          startTime: "2022-07-12T11:49:00", //isoStartDate,
          endTime: "2022-07-12T11:49:00", // isoEndDate,
        };

        console.log(event);
        sessionCount--;
        //if schedule pointer reaches the end of array, wrap arounf
        if (schedulePointer == schedule.length - 1) {
          schedulePointer = 0;
        } else {
          schedulePointer++;
        }
      } else {
        //if date's day doesn't match, increment it
        date.setDate(date.getDate() + 1);
      }
    }
  }
};

const batch = {
  teacher_name: null,
  planned_end_date: null,
  updatedby: "nWuleMgKPERrsPf10aJOq2CXgSQ2",
  course_name: null,
  level: "1",
  isScheduled: true,
  actual_end_date: null,
  schedule: [
    { duration: 60, time: "01:43", day: "Thursday" },
    { duration: 60, time: "11:49", day: "Tuesday" },
  ],
  batch_students: null,
  sessionCount: "4",
  createdby: "nWuleMgKPERrsPf10aJOq2CXgSQ2",
  category: null,
  status: null,
  start_date: "2022-07-12",
  batch_id: "S100",
};
scheduleBatch(batch);
