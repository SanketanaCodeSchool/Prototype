import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title, Resource } from "react-admin";
import FullCalendar, {
  computeSegEndResizable,
  formatDate,
} from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import nlLocale from '@fullcalendar/core/locales/nl'
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  Button,
  TextInput,
  DateField,
  DateInput,
  BooleanField,
  BooleanInput,
  EmailField,
  ShowButton,
  EditButton,
  DeleteButton,
  email,
  Confirm,
  useListContext,
  useUpdateMany,
  useRedirect,
} from "react-admin";
import { useState } from "react";
export default () => {
  // const handleClick = () => {
  //   console.log("Button Clicked");
  //   //display inProgress
  //   //Start Duration tracker
  // };
  const { selectedIds } = useListContext();
  const [open, setOpen] = useState(false);

  const redirect = useRedirect();
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);
  const handleConfirm = () => {
    const url =
      "https://us02web.zoom.us/j/89403449628#success:~:text=and%20Privacy%20Statement-,Launch,-Meeting";
    window.open(url, "_blank").focus();
    setOpen(false);
  };
  //const [cardCounter, setCardCounter] = useState(0);

  // const Test=  ()=>{
  //   let arr = [1,2,3,4];
  //   {arr.map(i => {
  //     return <Component />
  //   })}
  // }

  const Component = () => {

    return (
      <Card>
        <CardContent>
          <SimpleShowLayout>
            <TextField label="Upcoming Class: " />

            <TextField label="S8" />
            <TextField label="Friday, 29th July, 6:30pm" />
            <TextField label="In Progress" />
            <Button
              variant="contained"
              label="START CLASS"
              color="secondary"
              size="large"
              onClick={handleClick}
              target="_blank"
            />
            <Confirm
              isOpen={open}
              title="Start your class"
              content="Are you sure you want to start this meeting?"
              onConfirm={handleConfirm}
              onClose={handleDialogClose}
            />
            {/* {console.log("Event Count :" , eventCounter)} */}
          </SimpleShowLayout>
        </CardContent>
      </Card>
    );
  }

  
  
  let eventCounter = 0;

 
  return (
    <>
     
      <Component />
      <Component />
      <Component />

      {/* <Test/>
      <Test/>
      <Test/>
      <Test/> */}

      
      <Card>
        <Title title="Sanketana Dashboard" />
        <CardContent>
          <FullCalendar
            // locale={nlLocale}
            plugins={[
              timeGridPlugin,
              dayGridPlugin,
              listPlugin,
              googleCalendarPlugin,
            ]}
            googleCalendarApiKey="AIzaSyA9LehPKRjFBzQ-AKeQS9wqoDoTbliErG8"
            events={{
              googleCalendarId: "eshaan.gupta101@gmail.com",
            }}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "timeGridDay,dayGridMonth,listWeek",
            }}
            initialView="timeGridDay"
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
            eventClick={(info) => {
              console.log("Event: " + info.event.title);
              //console.log("Location: " + info.event.location);
              //redirect("#/batches");
              // change the border color just for fun
              info.el.style.borderColor = "red";

              //if (event.url) {
              //window.open(event.url);
              //events.jsEvent.cancelBubble = true;
              //events.jsEvent.preventDefault();
            }}
            eventDataTransform={(events) => {
              //console.log(events.location);
              events.url = events.location; //"#batches";

              return events;
            }}
            eventDidMount={(event) => {
              eventCounter = eventCounter + 1;
              console.log(eventCounter);

              console.log(event);
              //console.log("LOCATiON", events.extendedProps.location);
            }}
          />
        </CardContent>
      </Card>
    </>
  );
};
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { Title } from "react-admin";
// import FullCalendar, {
//   computeSegEndResizable,
//   formatDate,
// } from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// import listPlugin from "@fullcalendar/list";
// // import nlLocale from '@fullcalendar/core/locales/nl'
// import firebaseConfig from "./firebaseConfig";
// import { useEffect } from "react";
// import firebase from "firebase/compat/app";
// import { it } from "date-fns/locale";

// const fetchBatches = async () => {
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   const response = db.collection("batches");
//   const data = await response.get();
//   const data_array = data.docs.map((doc) => ({
//     id: doc.id,
//     data: doc.data(),
//   }));
//   console.log(data_array);
//   return data_array;
// };

// export default () => {
//   useEffect(() => {
//     //const start_time = fetchBatches();
//     //console.log(start_time);
//   }, []);

//   return (
//     <Card>
//       <Title title="Welcome to the administration" />
//       <CardContent>
//         {
//           /* <FullCalendar
//           plugins={[dayGridPlugin]}
//           // events={[ */
//           //   {
//           //     title: "event2",
//           //     start: start_time,
//           //     end: "2022-07-04",
//           //   },
//           //   events={async function (info, successCallback, failureCallback) {
//           //     const firebaseApp = firebase.initializeApp(firebaseConfig);
//           //     const db = firebase.firestore();
//           //     const response = db.collection("events");
//           //     const data = await response.get();
//           //     const data_array = data.docs.map((doc) => ({
//           //       id: doc.id,
//           //       data: doc.data(),
//           //     }));
//           //     console.log(data_array);
//           //     if (data_array == undefined) {
//           //       failureCallback("Undefined");
//           //     } else {
//           //       successCallback(
//           //         data_array
//           //           .map(function (eventEl) {
//           //             console.log(eventEl);
//           //             return eventEl.data.object;
//           //           })
//           //       );
//           //     }
//           //   }}
//           // />
//         }
//         <FullCalendar
//           // locale={nlLocale}
//           plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
//           googleCalendarApiKey="AIzaSyA9LehPKRjFBzQ-AKeQS9wqoDoTbliErG8"
//           events={{
//             googleCalendarId: "eshaan.gupta101@gmail.com",
//           }}
//           headerToolbar={{
//             left: "prev,next",
//             center: "title",
//             right: "dayGridMonth,listWeek",
//           }}
//           initialView="dayGridMonth"
//           editable={false}
//           selectable={false}
//           displayEventTime={true}
//           eventTimeFormat={{
//             hour: "2-digit",
//             minute: "2-digit",
//             meridiem: false,
//             hour12: false,
//           }}
//           nextDayThreshold="23:59:00"
//           eventColor="#971849"
//           eventTextColor="#ddd"
//           firstDay={1}
//         />{" "}

//       </CardContent>
//     </Card>
//   );
// };
