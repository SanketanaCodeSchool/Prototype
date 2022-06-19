import * as React from "react";
import { useEffect, useState } from "react";

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectField,
  SelectInput,
  ReferenceInput,
  FileInput,
  Loading,
  FileField,
  ArrayInput,
  ArrayField,
  SimpleFormIterator,
  DateInput,
  ReferenceArrayField,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  SelectArrayInput,
  SingleFieldList,
  ChipField,
  AutocompleteInput,
} from "react-admin";
import { useDataProvider } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from "./FirebaseReferenceFields";

/*
export  const BatchFilter = (props) => (
   <Filter {...props}>
     <TextInput label="Search" source="batch_id" alwaysOn />
   </Filter>
 );

 const ReferenceFilter = (props) => (
   <Filter {...props}>
     <ReferenceInput
       label="Organization"
       source="user.id"
       reference="users"
       allowEmpty
     >
       <SelectInput optionText="name" />
     </ReferenceInput>
   </Filter>
 );
*/

export const BatchList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="batch_id" label="BatchID" />
      <TextField source="name" label="Course" />
      <TextField source="level" label="Level" />
      <TextField source="category" label="Category" />
      <TextField source="teacher" label="Teacher" />

      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

// const ConditionalEmailField = ({}) =>
//   record && record.hasEmail ? (
//     <EmailField source="email" record={record} {...rest} />
//   ) : null;
export const BatchShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="batch_id" label="BatchID" />
      <TextField source="Students" label="BatchID" />
    </SimpleShowLayout>
  </Show>
);

export const BatchCreate = (props) => {
  const dataProvider = useDataProvider();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("students", {
        pagination: { page: 1, perPage: 100 },
        filter: {},
      })
      .then(({ data }) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!students) return null;

  const studentChoices = students.map((student) => ({
    student_id: student.student_id,
    first_name: student.first_name,
    last_name: student.last_name,
    write_data: {
      student_id: student.student_id,
      first_name: student.first_name,
      last_name: student.last_name,
    },
  }));

  const studentOptionRenderer = (choice) =>
    `${choice.student_id} ${choice.first_name} ${choice.last_name}`;

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="batch_id" label="BatchID" />
        <ReferenceInput label="Course" source="name" reference="courses">
          <AutocompleteInput optionText="name" optionValue="name" />
        </ReferenceInput>
        <AutocompleteInput
          label="Level"
          source="level"
          choices={[
            { id: "1", name: "1" },
            { id: "2", name: "2" },
            { id: "3", name: "3" },
            { id: "4", name: "4" },
            { id: "5", name: "5" },
          ]}
        />
        <AutocompleteInput
          label="Category"
          source="category"
          choices={[
            { id: "junior", name: "Junior" },
            { id: "intermediate", name: "Intermediate" },
            { id: "senior", name: "Senior" },
          ]}
        />
        <ReferenceInput label="Teacher" source="name" reference="teachers">
          <AutocompleteInput optionText="name" optionValue="name" />
        </ReferenceInput>
        <DateInput source="start_date" defaultValue={null} />
        <DateInput source="end_date" defaultValue={null} />
        <AutocompleteArrayInput
          label="Students"
          source="student_id"
          choices={studentChoices}
          optionText={studentOptionRenderer}
          optionValue="write_data"
        />
        <ArrayInput source="schedule">
          <SimpleFormIterator>
            <AutocompleteInput
              label="Day"
              source="day"
              choices={[
                { id: "12", name: "Monday" },
                { id: "1", name: "Tuesday" },
                { id: "2", name: "Wednesday" },
                { id: "Thu", name: "Thursday" },
                { id: "Fri", name: "Friday" },
                { id: "Sat", name: "Saturday" },
                { id: "Sun", name: "Sunday" },
              ]}
            />
            <AutocompleteInput
              label="Time"
              source="time"
              choices={[
                { id: "12", name: "00:00" },
                { id: "1", name: "01:00" },
                { id: "2", name: "02:00" },
                { id: "3", name: "03:00" },
                { id: "4", name: "04:00" },
                { id: "5", name: "05:00" },
              ]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export const BatchEdit = (props) => {
  const dataProvider = useDataProvider();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("students", {
        pagination: { page: 1, perPage: 100 },
        filter: {},
      })
      .then(({ data }) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!students) return null;

  const studentChoices = students.map((student) => ({
    student_id: student.student_id,
    first_name: student.first_name,
    last_name: student.last_name,
    write_data: {
      student_id: student.student_id,
      first_name: student.first_name,
      last_name: student.last_name,
    },
  }));

  const studentOptionRenderer = (choice) =>
    `${choice.student_id} ${choice.first_name} ${choice.last_name}`;

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="batch_id" label="BatchID" />
        <ReferenceInput label="Course" source="course_id" reference="courses">
          <AutocompleteInput optionText="course_id" />
        </ReferenceInput>
        <AutocompleteInput
          label="Level"
          source="level"
          choices={[
            { id: "1", name: "1" },
            { id: "2", name: "2" },
            { id: "3", name: "3" },
            { id: "4", name: "4" },
            { id: "5", name: "5" },
          ]}
        />
        <AutocompleteInput
          label="Category"
          source="category"
          choices={[
            { id: "junior", name: "Junior" },
            { id: "intermediate", name: "Intermediate" },
            { id: "senior", name: "Senior" },
          ]}
        />
        <ReferenceInput label="Teacher" source="name" reference="teachers">
          <AutocompleteInput optionText="name" optionValue="teacher_id" />
        </ReferenceInput>
        <DateInput source="start_date" defaultValue={null} />
        <DateInput source="end_date" defaultValue={null} />
        <AutocompleteArrayInput
          label="Students"
          source="student_id"
          choices={studentChoices}
          optionText={studentOptionRenderer}
          optionValue="write_data"
        />
        <ArrayInput source="schedule">
          <SimpleFormIterator>
            <AutocompleteInput
              label="Day"
              source="day"
              choices={[
                { id: "12", name: "Monday" },
                { id: "1", name: "Tuesday" },
                { id: "2", name: "Wednesday" },
                { id: "Thu", name: "Thursday" },
                { id: "Fri", name: "Friday" },
                { id: "Sat", name: "Saturday" },
                { id: "Sun", name: "Sunday" },
              ]}
            />
            <AutocompleteInput
              label="Time"
              source="time"
              choices={[
                { id: "12", name: "00:00" },
                { id: "1", name: "01:00" },
                { id: "2", name: "02:00" },
                { id: "3", name: "03:00" },
                { id: "4", name: "04:00" },
                { id: "5", name: "05:00" },
              ]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
