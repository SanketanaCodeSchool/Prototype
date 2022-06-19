// in src/course.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
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
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const CourseFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const CourseList = (props) => (
  <List {...props} filters={<CourseFilter />}>
    <Datagrid>
      <TextField source="course_id" label = "CourseID" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="category" />
      <TextField source="level" />
      <TextField source="duration" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);


export const CourseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="course_id" label = "CourseID" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="category" />
      <TextField source="level" />
      <TextField source="duration" />
    </SimpleShowLayout>
  </Show>
);

export const CourseCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="course_id" label = "CourseID" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="category" />
      <TextInput source="level" />
      <TextInput source="duration" />
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
     <TextInput  disabled source="course_id" label = "CourseID" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="category" />
      <TextInput source="level" />
      <TextInput source="duration" />
    </SimpleForm>
  </Edit>
);
