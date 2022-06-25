import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import nlLocale from '@fullcalendar/core/locales/nl'
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default () => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>
      <FullCalendar
        // locale={nlLocale}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE"
        // events=
        // {
        //     {
        //         googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',

        //     }
        // }

        events={[
          {
            id: "1",
            title: "Python Level 1",
            start: '2022-06-05T13:30:00',
            end: '2022-06-05T14:30:00',
          },
          {
            id: "2",
            title: "Python Level 1",
            start: '2022-06-09T10:30:00',
            end: '2022-06-09T11:30:00',
          },
          {
            id: "3",
            title: "Scratch Level 4",
            start: '2022-06-01T17:30:00',
            end: '2022-06-01T18:30:00',
          },
          {
            id: "4",
            title: "Python Level 3",
            start: '2022-06-02T10:30:00',
            end: '2022-06-02T11:30:00',
          },
          {
            id: "5",
            title: "Python Level 3",
            start: '2022-06-14T10:30:00',
            end: '2022-06-14T11:30:00',
          },
          {
            id: "6",
            title: "Python Level 3",
            start: '2022-06-16T10:30:00',
            end: '2022-06-16T11:30:00',
          },
          {
            id: "7",
            title: "Python Level 3",
            start: '2022-06-17T10:30:00',
            end: '2022-06-17T11:30:00',
          },
        ]}
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
      />
    </CardContent>
  </Card>
);
