import React, {Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export class EventCalendar extends Component{
    render(){
        return(
            <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
        )
    }
}

export default EventCalendar;