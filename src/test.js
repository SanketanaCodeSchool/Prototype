
const getDateTime = (date, time, duration) => {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");
  console.log(year, month, day , hours, minutes);
  const seconds = "00";
  
  //var timeString = "2020-06-10T10:00:00.000";
  
  let timeString = date+time;
  console.log(timeString);
  var timeZone = "IST";
  //var duration = '01:30:00';
 
  
  var startDate = new Date(timeString);
  //var msDuration = (Number(duration.split(':')[0]) * 60 * 60 + Number(duration.split(':')[1]) * 60  + Number(duration.split(':')[2])) * 1000;
  let msDuration = duration * 60000;

  var endDate = new Date(startDate.getTime() + msDuration);
  var isoStartDate = new Date(startDate.getTime()-new Date().getTimezoneOffset()*60*1000).toISOString().split(".")[0];
  var isoEndDate = new Date(endDate.getTime()-(new Date().getTimezoneOffset())*60*1000).toISOString().split(".")[0];
  console.log(isoStartDate);
  console.log(isoEndDate);


  return  "" //dateTime;
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
        //console.log("Found it");
        //console.log(date);
        //dateTime = new Date(date);

        let startTime = schedule[schedulePointer]["time"];
        let duration = schedule[schedulePointer]["duration"];
        //console.log(date);
        //console.log(startTime);
        let ISODate = date.toISOString();
        
        getDateTime(ISODate, startTime , duration);
        
        //console.log(dateTime);
        //console.log(ISODate + startTime);
        //set flag to false if next event's date is found
        flag = false;
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
    let event = {
      eventName: batch.batch_id + batch.teacher_name,
      description: batch.teacher_name + "'s" + batch.course_name + " batch.",
    };
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
