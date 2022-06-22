import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
// import nlLocale from '@fullcalendar/core/locales/nl'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent><FullCalendar
            // locale={nlLocale}
            plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}

            googleCalendarApiKey='AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE'

            events=
            {
                {
                    googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
                    
                }
            }


            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,listWeek'
            }}
            initialView='dayGridMonth'
            editable={false}
            selectable={false}
            displayEventTime={true}
            eventTimeFormat={{
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false,
                hour12: false
            }}
            nextDayThreshold = '23:59:00'
            
            eventColor='#971849'
            eventTextColor='#ddd'

            firstDay={1}        
        /></CardContent>
    </Card>
);
