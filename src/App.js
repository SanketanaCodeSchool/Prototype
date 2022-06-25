import * as React from "react";
import {
  BatchList,
  BatchShow,
  BatchCreate,
  BatchEdit,
  BatchFilter,
} from "./batches";
import {
  StudentList,
  StudentShow,
  StudentCreate,
  StudentEdit,
  StudentFilter,
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
} from "./teachers";

//import { PostList, PostShow, PostCreate, PostEdit } from './posts';
//import { UserList, UserShow, UserCreate, UserEdit } from './users';
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

//import * as Posts from "./posts";
//import * as Users from "./users";

import firebase from "firebase/compat/app";

import UserIcon from "@material-ui/icons/People";


import * as Batches from "./batches";
import * as Students from "./students";
import * as Courses from "./courses";
import { myLayout } from "./Layout";
import * as Teachers from "./teachers";
import { defaultTheme } from "react-admin";
import CustomLoginPage from "./CustomLoginPage";
import EventMonitor from "./EventMonitor";

import Dashboard from "./Dashboard";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

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

const theme = {
  ...defaultTheme,
  sidebar: {
    width: 200, // The default value is 240
    closedWidth: 70, // The default value is 55
  },
};

const App = () => {
  return (
    <>
      <Admin
        dashboard={Dashboard}
        theme={theme}
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
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
          icon={UserIcon}
          list={StudentList}
          show={StudentShow}
          create={StudentCreate}
          edit={StudentEdit}
          filter={StudentFilter}
        />
        <Resource
          name="teachers"
          icon={UserIcon}
          list={TeacherList}
          show={TeacherShow}
          create={TeacherCreate}
          edit={TeacherEdit}
          filter={TeacherFilter}
        />
        <Resource
          name="courses"
          icon={UserIcon}
          list={CourseList}
          show={CourseShow}
          create={CourseCreate}
          edit={CourseEdit}
          filter={CourseFilter}
        />
      </Admin>
      <EventMonitor />
    </>
  );
};

export default App;
