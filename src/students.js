// in src/Student.js
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
  EmailField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const StudentFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const StudentList = (props) => (
  <List {...props} filters={<StudentFilter />}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="age" />
      <EmailField source="email" />
      <TextField source="parentname" />
      <TextField source="location" />
      <TextField source="dob" />
      <TextField source="grade" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const StudentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="age" />
      <EmailField source="email" />
      <TextField source="parentname" />
      <TextField source="location" />
      <TextField source="dob" />
      <TextField source="grade" />
    </SimpleShowLayout>
  </Show>
);

export const StudentCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="age" />
      <TextInput source="email" />
      <TextInput source="parentname" />
      <TextInput source="location" />
      <TextInput source="dob" />
      <TextInput source="grade" />
    </SimpleForm>
  </Create>
);

export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="name" />
      <TextInput source="age" />
      <TextInput source="email" />
      <TextInput source="parentname" />
      <TextInput source="location" />
      <TextInput source="dob" />
      <TextInput source="grade" />

    </SimpleForm>
  </Edit>
);
