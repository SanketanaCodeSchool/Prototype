import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import FullCalendar, {
  computeSegEndResizable,
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import listPlugin from "@fullcalendar/list";
// import nlLocale from '@fullcalendar/core/locales/nl'
import firebaseConfig from "./firebaseConfig";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import { it } from "date-fns/locale";

const fetchBatches = async () => {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const response = db.collection("batches");
  const data = await response.get();
  const data_array = data.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  console.log(data_array);
  return data_array;
};

export default () => {
  useEffect(() => {
    //const start_time = fetchBatches();
    //console.log(start_time);
  }, []);

  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>
        <FullCalendar
          plugins={[dayGridPlugin]}
          // events={[
          //   {
          //     title: "event2",
          //     start: start_time,
          //     end: "2022-07-04",
          //   },
          events={async function (info, successCallback, failureCallback) {
            const firebaseApp = firebase.initializeApp(firebaseConfig);
            const db = firebase.firestore();
            const response = db.collection("batches");
            const data = await response.get();
            const data_array = data.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }));
            console.log(data_array);
            if (data_array == undefined) {
              failureCallback("Undefined");
            } else {
              successCallback(
                data_array
                  .map(function (eventEl) {
                    console.log(eventEl);
                    return {
                      title: eventEl.data.teacher_name,
                      start: eventEl.data.start_date,
                    };
                  })
              );
            }
          }}
        />

        {/* <FullCalendar
      
      // locale={nlLocale}
      plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
      googleCalendarApiKey="AIzaSyA9LehPKRjFBzQ-AKeQS9wqoDoTbliErG8"
      events=
      {
          {
              googleCalendarId: "eshaan.gupta101@gmail.com",

          }
      }

        headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,listWeek",
      }}
      initialView="dayGridMonth"
      editable={false}
      selectable={false}
      displayEventTime={true}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
      nextDayThreshold="23:59:00"
      eventColor="#971849"
      eventTextColor="#ddd"
      firstDay={1}
    /> */}
      </CardContent>
    </Card>
  );
};
