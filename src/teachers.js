import * as React from "react";
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
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
} from "react-admin";

export const TeacherFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="teacher_name" alwaysOn />
  </Filter>
);

export const TeacherList = (props) => (
  <List {...props} filters={<TeacherFilter />}>
    <Datagrid>
      <TextField source="teacher_id" label = "TeacherID" />
      <TextField source="teacher_name" />
      <TextField source="registered_phone" label = "Phone" />
      <EmailField source="registered_email" label = "Email" />
      <TextField source="status" />
      <BooleanField source="active" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);
export const TeacherHistoryList = (props) => (
  <List {...props} filters={<TeacherFilter />}>
    <Datagrid>
      <TextField source="teacher_id" label = "TeacherID" />
      <TextField source="teacher_name" />
      <TextField source="registered_phone" label = "Phone" />
      <EmailField source="registered_email" label = "Email" />
      <TextField source="status" />
      <BooleanField source="active" />
      <DateField source="created_at" label = "Created"/>
      <DateField source="deleted_at" label = "Deleted"/>
      <DateField source="updated_at" label = "Updated"/>  
    </Datagrid>
  </List>
);

export const TeacherShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="teacher_id" label = "Teacher ID" />
      <TextField source="teacher_name" />
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

const validateName = [required(), minLength(2), maxLength(30)];
const validateEmail = email();
export const TeacherCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="teacher_id" label = "Teacher ID" />
      <TextInput source="teacher_name" validate={validateName} />
      <TextInput source="registered_phone" />
      <TextInput source="alternate_phone" />
      <TextInput source="registered_email" validate={validateEmail} />
      <TextInput source="alternate_email" validate={validateEmail} />
      <TextInput source="status" />
      <TextInput source="city " />
      <TextInput source="country" />
      <TextInput source="address" />
      <BooleanInput source="active" />
      <TextInput source="currency" />
      <DateInput source="joined_date" />
      <DateInput source="left_date" default = {null} />
      <TextInput source="country_code" />
      <TextInput source="timezone" />
    </SimpleForm>
  </Create>
);


export const TeacherEdit = (props) => (
  <Edit {...props} >
    <SimpleForm>
      <TextInput source="teacher_id" label = "Teacher ID" />
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
      <DateInput source="left_date" default = {null} />
      <TextInput source="country_code" />
      <TextInput source="timezone" />
    </SimpleForm>
  </Edit>
);

