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
  DateField,
  DateInput,
  BooleanField,
  BooleanInput,
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
    
    <TextField source="student_id" label = "StudentID" /> 
    <TextField source="first_name" label = "FirstName" />
    <TextField source="last_name" label = "LastName" />
    <DateField source="dob" label = "DOB"/>
    <TextField source="registered_phone" label = "Phone" />
    <EmailField source="registered_email" label = "Email" />
    <TextField source="status" />
    <TextField source="current_batch_id" />
    <BooleanField source="active" />
    <TextField source="lifecycle_stage" />
    <TextField source="grade" />
    <ShowButton label="" />
    <EditButton label="" />
    <DeleteButton label="" redirect={false}/>
    </Datagrid>
    </List>
    );
    
    
    
    export const StudentShow = (props) => (
      <Show {...props}>
      <SimpleShowLayout>
      
      <TextField source="student_id" label = "StudentID" /> 
      <TextField source="first_name" />
      <TextField source="last_name" />
      <DateField source="dob" />
      <TextField source="mother_name" />
      <TextField source="father_name" />
      <TextField source="parent_name" />
      <TextField source="registered_phone" />
      <TextField source="student_phone" />
      <TextField source="alternate_phone" />
      <EmailField source="registered_email" />
      <EmailField source="student_email" />
      <EmailField source="alternate_email" />
      <TextField source="status" />
      <TextField source="city" />
      <TextField source="country" />
      <TextField source="address" />
      <TextField source="current_batch_id" />
      <BooleanField source="active" />
      <TextField source="billing_plan" />
      <TextField source="item_id" />
      <TextField source="currency" />
      <DateField source="joined_date" />
      <DateField source="left_date" />
      <TextField source="lifecycle_stage" />
      <TextField source="country_code" />
      <TextField source="acquisition_channel" />
      <TextField source="grade" />
      <TextField source="parent_profession" />
      <TextField source="timezone" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      
      </SimpleShowLayout>
      </Show>
      );
      
      export const StudentCreate = (props) => (
        <Create {...props} >
        <SimpleForm>
        
        <TextInput source="student_id" label = "StudentID" /> 
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <DateInput source="dob" />
        <TextInput source="mother_name" />
        <TextInput source="father_name" />
        <TextInput source="parent_name" />
        <TextInput source="registered_phone" />
        <TextInput source="student_phone" />
        <TextInput source="alternate_phone" />
        <TextInput source="registered_email" />
        <TextInput source="student_email" />
        <TextInput source="alternate_email" />
        <TextInput source="status" />
        <TextInput source="city" />
        <TextInput source="country" />
        <TextInput source="address" />
        <TextInput source="current_batch_id" />
        <BooleanInput source="active" />
        <TextInput source="billing_plan" />
        <TextInput source="item_id" />
        <TextInput source="currency" />
        <DateInput source="joined_date" />
        <DateInput source="left_date" />
        <TextInput source="lifecycle_stage" />
        <TextInput source="country_code" />
        <TextInput source="acquisition_channel" />
        <TextInput source="grade" />
        <TextInput source="parent_profession" />
        <TextInput source="timezone" />
        </SimpleForm>
        </Create>
        );
        
        export const StudentEdit = (props) => (
          <Edit {...props}>
          <SimpleForm>
          <TextInput source="student_id" label = "StudentID" /> 
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <DateInput source="dob" />
          <TextInput source="mother_name" />
          <TextInput source="father_name" />
          <TextInput source="parent_name" />
          <TextInput source="registered_phone" />
          <TextInput source="student_phone" />
          <TextInput source="alternate_phone" />
          <TextInput source="registered_email" />
          <TextInput source="student_email" />
          <TextInput source="alternate_email" />
          <TextInput source="status" />
          <TextInput source="city" />
          <TextInput source="country" />
          <TextInput source="address" />
          <TextInput source="current_batch_id" />
          <BooleanInput source="active" />
          <TextInput source="billing_plan" />
          <TextInput source="item_id" />
          <TextInput source="currency" />
          <DateInput source="joined_date" />
          <DateInput source="left_date" />
          <TextInput source="lifecycle_stage" />
          <TextInput source="country_code" />
          <TextInput source="acquisition_channel" />
          <TextInput source="grade" />
          <TextInput source="parent_profession" />
          <TextInput source="timezone" />
          
          </SimpleForm>
          </Edit>
          );
          