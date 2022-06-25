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
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

export const CourseFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="course_name" alwaysOn />
  </Filter>
);

export const CourseList = (props) => (
  <List {...props} filters={<CourseFilter />}>
    <Datagrid>
      <TextField source="course_id" label = "CourseID" />
      <TextField source="course_name" />
      <TextField source="description" />
      <TextField source="category" />
      <TextField source="level" />
      <TextField source="duration" />
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
      <TextField source="course_name" />
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
      <TextInput source="course_id" label = "Course ID" />
      <TextInput source="course_name" />
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
     <TextInput  disabled source="course_id" label = "Course ID" />
      <TextInput source="course_name" />
      <TextInput source="description" />
      <TextInput source="category" />
      <TextInput source="level" />
      <TextInput source="duration" />
    </SimpleForm>
  </Edit>
);
