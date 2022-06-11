// in src/teacher.js
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
  BooleanField,
  BooleanInput,
  DateField,
  DateInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const TeacherFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const TeacherList = (props) => (
  <List {...props} filters={<TeacherFilter />}>
    <Datagrid>
      <TextField source="teacher_id" label = "TeacherID" />
      <TextField source="name" />
      <TextField source="registered_phone" label = "Phone" />
      <EmailField source="registered_email" label = "Email" />
      <TextField source="status" />
      <BooleanField source="active" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const TeacherShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="teacher_id" label = "TeacherID" />
      <TextField source="name" />
      <TextField source="registered_phone" />
      <TextField source="alternate_phone" />
      <EmailField source="registered_email" />
      <EmailField source="alternate_email" />
      <TextField source="status" />
      <TextField source="city " />
      <TextField source="country" />
      <TextField source="address" />
      <BooleanField source="active" />
      <TextField source="currency" />
      <DateField source="joined_date" />
      <DateField source="left_date" />
      <TextField source="country_code" />
      <TextField source="timezone" />
    </SimpleShowLayout>
  </Show>
);

export const TeacherCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="teacher_id" label = "TeacherID" />
      <TextInput source="name" />
      <TextInput source="registered_phone" />
      <TextInput source="alternate_phone" />
      <TextInput source="registered_email" />
      <TextInput source="alternate_email" />
      <TextInput source="status" />
      <TextInput source="city " />
      <TextInput source="country" />
      <TextInput source="address" />
      <BooleanInput source="active" />
      <TextInput source="currency" />
      <DateInput source="joined_date" />
      <DateInput source="left_date" />
      <TextInput source="country_code" />
      <TextInput source="timezone" />
    </SimpleForm>
  </Create>
);

export const TeacherEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="teacher_id" label = "TeacherID" />
      <DateInput disabled source="createdate" />
      <DateInput disabled source="lastupdate" />
      <TextInput source="teacher_name" />
      <TextInput source="registered_phone" />
      <TextInput source="alternate_phone" />
      <TextInput source="registered_email" />
      <TextInput source="alternate_email" />
      <TextInput source="status" />
      <TextInput source="city " />
      <TextInput source="country" />
      <TextInput source="address" />
      <BooleanInput source="active" />
      <TextInput source="currency" />
      <DateInput source="joined_date" />
      <DateInput source="left_date" />
      <TextInput source="country_code" />
      <TextInput source="timezone" />
    </SimpleForm>
  </Edit>
);

