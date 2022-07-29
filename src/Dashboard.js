import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import FullCalendar, { formatDate } from "@fullcalendar/react";
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
  useRedirect 
} from "react-admin";
import { useState } from 'react';
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
      redirect("https://us02web.zoom.us/j/89403449628#success:~:text=and%20Privacy%20Statement-,Launch,-Meeting");
      setOpen(false);
  };


  return (
    <>
      <Card>
        <CardContent>
          <SimpleShowLayout>
            <TextField source="student_id" label="Student ID" />
            <TextField source="first_name" />
            <Button
              variant="contained"
              label="START"
              color="secondary"
              size="large"
              onClick={handleClick}
              target="_blank"
            />
            <Confirm
              isOpen={open}
              
              title="Update View Count"
              content="Are you sure you want to update these posts?"
              onConfirm={handleConfirm}
              onClose={handleDialogClose}
            />
          </SimpleShowLayout>
        </CardContent>
      </Card>
      <Card>
        <Title title="Sanketana Dashboard" />
        <CardContent>
          <FullCalendar
            // locale={nlLocale}
            plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
            googleCalendarApiKey="AIzaSyA9LehPKRjFBzQ-AKeQS9wqoDoTbliErG8"
            events={{
              googleCalendarId: "eshaan.gupta101@gmail.com",
            }}
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
