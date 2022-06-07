import * as React from 'react';
import { BatchList, BatchShow, BatchCreate, BatchEdit } from './batches';
import { StudentList, StudentShow, StudentCreate, StudentEdit } from './students';
import { CourseList, CourseShow, CourseCreate, CourseEdit } from './courses';
import { TeacherList, TeacherShow, TeacherCreate, TeacherEdit } from './teachers';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';

import firebase from "firebase/compat/app";

import UserIcon from '@material-ui/icons/People';
import CommentIcon from '@material-ui/icons/Comment';

import * as Batches from "./batches";
import * as Students from "./students";
import * as Courses from "./courses";
import * as Teachers from "./teachers";
import * as Comments from "./comments";

import CustomLoginPage from './CustomLoginPage';
import EventMonitor from './EventMonitor';
const firebaseConfig = {
  apiKey : process.env.REACT_APP_apiKey, 
  authDomain : process.env.REACT_APP_authDomain, 
  projectId : process.env.REACT_APP_projectId, 
  storageBucket : process.env.REACT_APP_storageBucket, 
  messagingSenderId : process.env.REACT_APP_messagingSenderId, 
  appId : process.env.REACT_APP_appId, 
  measurementId : process.env.REACT_APP_measurementId, 
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['batches'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

const App = () =>{
    return (
      <>
        <Admin
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
          />
          <Resource
            name="students"
            icon={UserIcon}
            list={StudentList}
            show={StudentShow}
            create={StudentCreate}
            edit={StudentEdit}
          />
          <Resource
            name="teachers"
            icon={UserIcon}
            list={TeacherList}
            show={TeacherShow}
            create={TeacherCreate}
            edit={TeacherEdit}
          />
          <Resource
            name="course"
            icon={UserIcon}
            list={CourseList} 
            show={CourseShow}
            create={CourseCreate}
            edit={CourseEdit}
          />
        </Admin>
        <EventMonitor />
      </>
    );
  }

export default App;
