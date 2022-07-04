import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import listPlugin from "@fullcalendar/list";
// import nlLocale from '@fullcalendar/core/locales/nl'
import firebaseConfig  from "./firebaseConfig";
import { useEffect } from "react";

const fetchBatches = async () => {
  const response = db.collection("batches");
  const data = await response.get();
  const test = data.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
    //setBatches([...batches, item.data()]);
  }));
  console.log(test[0].data.start_date);
};

export default () => {
  useEffect(() => {
    fetchBatches();
  }, []);
  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={[
            {
              title: "event2",
              start: "2022-07-04",
              end: "2022-07-04",
            },
          ]}
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
