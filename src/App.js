//import * as React from "react";

import {
  BatchList,
  BatchShow,
  BatchCreate,
  BatchEdit,
  BatchFilter,
  BatchHistoryList,
} from "./batches";
import {
  StudentList,
  StudentShow,
  StudentCreate,
  StudentEdit,
  StudentFilter,
  StudentHistoryList,
} from "./students";
import {
  CourseList,
  CourseShow,
  CourseCreate,
  CourseEdit,
  CourseFilter,
} from "./courses";
import {
  TeacherList,
  TeacherShow,
  TeacherCreate,
  TeacherEdit,
  TeacherFilter,
  TeacherHistoryList,
} from "./teachers";

//import { PostList, PostShow, PostCreate, PostEdit } from './posts';
//import { UserList, UserShow, UserCreate, UserEdit } from './users';
import { Admin, Resource, usePermissions } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

//import * as Posts from "./posts";
//import * as Users from "./users";

import firebase from "firebase/compat/app";

// Import Firestore database

import UserIcon from "@material-ui/icons/People";

import * as Batches from "./batches";
import * as Students from "./students";
import * as Courses from "./courses";
//import { myLayout } from "./Layout";
import * as Teachers from "./teachers";
import { defaultTheme } from "react-admin";
import CustomLoginPage from "./CustomLoginPage";
import EventMonitor from "./EventMonitor";
import "firebase/auth";
import Dashboard from "./Dashboard";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['batches'];
  // dontwatch: ['comments'];
  persistence: "local",
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});
const auth = firebase.auth;
if (location.hostname === "localhost" && 0) {
  db.useEmulator("localhost", 8080);
  //auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
}
const theme = {
  ...defaultTheme,
  sidebar: {
    width: 200, // The default value is 240
    closedWidth: 70, // The default value is 55
  },
};

const App = () => {
  const { permissions } = usePermissions();
  console.log("permissionsv = ", permissions);
  return (
    <>
      <Admin
        dashboard={Dashboard}
        theme={theme}
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        {/* <Resource name = "myLayout" /> */}

        <Resource
          name="batches"
          list={BatchList}
          show={BatchShow}
          create={BatchCreate}
          edit={BatchEdit}
          filter={BatchFilter}
        />
        <Resource
          name="students"
          icon={permissions === "admin" ? UserIcon : null}
          list={permissions === "admin" ? StudentList : null}
          show={permissions === "admin" ? StudentShow : null}
          create={permissions === "admin" ? StudentCreate : null}
          edit={permissions === "admin" ? StudentEdit : null}
          filter={permissions === "admin" ? StudentFilter : null}
        />
        <Resource
          name="teachers"
          icon={permissions === "admin" ? UserIcon : null}
          list={permissions === "admin" ? TeacherList : null}
          show={permissions === "admin" ? TeacherShow : null}
          create={permissions === "admin" ? TeacherCreate : null}
          edit={permissions === "admin" ? TeacherEdit : null}
          filter={permissions === "admin" ? TeacherFilter : null}
        />
        <Resource
          name="courses"
          icon={permissions === "admin" ? UserIcon : null}
          list={permissions === "admin" ? CourseList : null}
          show={permissions === "admin" ? CourseShow : null}
          create={permissions === "admin" ? CourseCreate : null}
          edit={permissions === "admin" ? CourseEdit : null}
          filter={permissions === "admin" ? CourseFilter : null}
        />
        <Resource
          name="batches_history"
          list={permissions === "admin" ? BatchHistoryList : null}
          options={{ label: "Batch Logs" }}
        />
        <Resource
          name="students_history"
          list={permissions === "admin" ? StudentHistoryList : null}
          options={{ label: "Student Logs" }}
        />
        <Resource
          name="teachers_history"
          list={permissions === "admin" ? TeacherHistoryList : null}
          options={{ label: "Teachers Logs" }}
        />
      </Admin>
      <EventMonitor />
    </>
  );
};

export default App;
