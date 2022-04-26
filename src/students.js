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
     <TextField source="Id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="dateOfBirth" />
      <TextField source="age" />
      <TextField source="grade" />
      <TextField source="motherName" />
      <TextField source="fatherName" />
      <TextField source="phoneNumber1" />
      <TextField source="phoneNumber2" /> 
      <TextField source="studentEmail" />
      <TextField source="parentEmail" />
      <TextField source="status" />
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
      <TextField source="Id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="dateOfBirth" />
      <TextField source="age" />
      <TextField source="grade" />
      <TextField source="motherName" />
      <TextField source="fatherName" />
      <TextField source="phoneNumber1" />
      <TextField source="phoneNumber2" /> 
      <TextField source="studentEmail" />
      <TextField source="parentEmail" />
      <TextField source="status" />
      
    </SimpleShowLayout>
  </Show>
);

export const StudentCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="Id" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="dateOfBirth" />
      <TextInput source="age" />
      <TextInput source="grade" />
      <TextInput source="motherName" />
      <TextInput source="fatherName" />
      <TextInput source="phoneNumber1" />
      <TextInput source="phoneNumber2" /> 
      <TextInput source="studentEmail" />
      <TextInput source="parentEmail" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);

export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="Id" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="dateOfBirth" />
      <TextInput source="age" />
      <TextInput source="grade" />
      <TextInput source="motherName" />
      <TextInput source="fatherName" />
      <TextInput source="phoneNumber1" />
      <TextInput source="phoneNumber2" /> 
      <TextInput source="studentEmail" />
      <TextInput source="parentEmail" />
      <TextInput source="status" />

    </SimpleForm>
  </Edit>
);
