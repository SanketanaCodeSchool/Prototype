import * as React from "react";
import { useEffect, useState } from "react";

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  FunctionField,
  DateTimeInput,
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
  BooleanField,
  BooleanInput,
  SingleFieldList,
  ChipField,
  AutocompleteInput,
  ReferenceManyField,
  ResettableTextField,
} from "react-admin";
import { useDataProvider } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import {
  FirebaseReferenceField,
  FirebaseReferenceInput,
} from "./FirebaseReferenceFields";

export const BatchFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="batch_id" alwaysOn />
  </Filter>
);
/*
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
export const BatchHistoryList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="batch_id" label="BatchID" />
      <TextField source="course_name" label="Course" />
      <TextField source="level" label="Level" />
      <TextField source="category" label="Category" />
      <TextField source="teacher_name" label="Teacher" />
      <DateField source="start_date" />
      <ArrayField source="batch_students">
        <SingleFieldList linkType={false}>
          <FunctionField
            render={(record) => (
              <ChipField
                record={{
                  student_id: record.first_name + " " + record.last_name,
                }}
                source="student_id"
              />
            )}
          />
        </SingleFieldList>
      </ArrayField>
      <DateField source="created_at" label="Created" />
      <DateField source="deleted_at" label="Deleted" />
      <DateField source="updated_at" label="Updated" />
      <BooleanField source="isScheduled" label="Schedule?" />
    </Datagrid>
  </List>
);

export const BatchList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="batch_id" label="BatchID" />
      <TextField source="course_name" label="Course" />
      <TextField source="level" label="Level" />
      <TextField source="category" label="Category" />
      <TextField source="teacher_name" label="Teacher" />
      <DateField source="start_date" />
      <ArrayField source="batch_students">
        <SingleFieldList linkType={false}>
          <FunctionField
            render={(record) => (
              <ChipField
                record={{
                  student_id: record.first_name + " " + record.last_name,
                }}
                source="student_id"
              />
            )}
          />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="isScheduled" label="Schedule?" />
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
      <TextField source="course_name" label="Course" />
      <TextField source="level" label="Level" />
      <TextField source="category" label="Category" />
      <TextField source="teacher_name" label="Teacher" />
      <DateField source="start_date" />
      <DateField source="planned_end_date" />
      <DateField source="actual_end_date" />
      <ArrayField source="batch_students">
        <SingleFieldList>
          <FunctionField
            render={(record) => (
              <ChipField
                record={{
                  student_id: record.first_name + " " + record.last_name,
                }}
                source="student_id"
              />
            )}
          />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="schedule">
        <SingleFieldList>
          <FunctionField
            render={(record) => (
              <ChipField
                record={{ time: record.day + "-" + record.time }}
                source="time"
              />
            )}
          />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="isScheduled" label="Schedule?" />
    </SimpleShowLayout>
  </Show>
);

export const BatchCreate = (props) => {
  const dataProvider = useDataProvider();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState(null);

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
      registered_email: student.registered_email,
    },
  }));

  const studentOptionRenderer = (choice) =>
    `${choice.student_id} ${choice.first_name} ${choice.last_name}`;

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="batch_id" label="Batch ID" defaultValue={null} />
        <ReferenceInput label="Course" source="course_name" reference="courses">
          <AutocompleteInput
            optionText="course_name"
            optionValue="course_name"
            defaultValue={null}
          />
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
          defaultValue={null}
        />
        <AutocompleteInput
          label="Category"
          source="category"
          choices={[
            { id: "junior", name: "Junior" },
            { id: "intermediate", name: "Intermediate" },
            { id: "senior", name: "Senior" },
          ]}
          defaultValue={null}
        />
        <ReferenceInput
          label="Teacher"
          source="teacher_name"
          reference="teachers"
        >
          <AutocompleteInput
            optionText="teacher_name"
            optionValue="teacher_name"
            defaultValue={null}
          />
        </ReferenceInput>
        <TextInput label="Zoom Link" source="zoom_link"  type="url" />
        <AutocompleteInput
          label="Status"
          source="status"
          choices={[
            { id: "initiated", name: "Initiated" },
            { id: "scheduled", name: "Scheduled" },
            { id: "started", name: "Started" },
            { id: "onPause", name: "onPause" },
            { id: "ended", name: "Ended" },
          ]}
          defaultValue={null}
        />
        <BooleanInput
          source="isScheduled"
          label="Schedule?"
          defaultValue={null}
        />
        <DateInput label="Start Date" source="start_date" defaultValue={null} />
        <DateInput
          label="Planned End Date"
          source="planned_end_date"
          defaultValue={null}
        />
        <DateInput
          label="Actual End Date"
          source="actual_end_date"
          defaultValue={null}
        />
        <AutocompleteArrayInput
          label="Students"
          source="batch_students"
          choices={studentChoices}
          optionText={studentOptionRenderer}
          optionValue="write_data"
          defaultValue={null}
        />
        <TextInput source="sessionCount" label="Session Count" defaultValue= {16} />
        <ArrayInput source="schedule" defaultValue={null}>
          <SimpleFormIterator>
            <AutocompleteInput
              label="Day"
              source="day"
              choices={[
                { id: "Monday", name: "Monday" },
                { id: "Tuesday", name: "Tuesday" },
                { id: "Wednesday", name: "Wednesday" },
                { id: "Thursday", name: "Thursday" },
                { id: "Friday", name: "Friday" },
                { id: "Saturday", name: "Saturday" },
                { id: "Sunday", name: "Sunday" },
              ]}
              defaultValue={null}
            />
            <TextInput
              source="time"
              type={"time"}
              label="Time"
              defaultValue={null}
            />
            <TextInput source="duration" label="Duration" defaultValue= {60} />
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
  const [value, setValue] = useState(null);

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
      registered_email: student.registered_email,
    },
  }));

  const studentOptionRenderer = (choice) =>
    `${choice.student_id} ${choice.first_name} ${choice.last_name}`;

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="batch_id" label="Batch ID" />
        <ReferenceInput label="Course" source="course_name" reference="courses">
          <AutocompleteInput
            optionText="course_name"
            optionValue="course_name"
          />
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
            { id: "Junior", name: "Junior" },
            { id: "Intermediate", name: "Intermediate" },
            { id: "Senior", name: "Senior" },
          ]}
        />
        <ReferenceInput
          label="Teacher"
          source="teacher_name"
          reference="teachers"
        >
          <AutocompleteInput
            optionText="teacher_name"
            optionValue="teacher_name"
          />
        </ReferenceInput>
        <TextInput label="Zoom Link" source="zoom_link"  type="url" />
        <AutocompleteInput
          label="Status"
          source="status"
          choices={[
            { id: "Initiated", name: "Initiated" },
            { id: "Scheduled", name: "Scheduled" },
            { id: "Started", name: "Started" },
            { id: "onPause", name: "onPause" },
            { id: "Ended", name: "Ended" },
          ]}
        />
        <BooleanInput source="isScheduled" label="Schedule?" />

        <DateInput label="Start Date" source="start_date" defaultValue={null} />
        <DateInput
          label="Planned End Date"
          source="planned_end_date"
          defaultValue={null}
        />
        <DateInput
          label="Actual End Date"
          source="actual_end_date"
          defaultValue={null}
        />
        <AutocompleteArrayInput
          label="Students"
          source="batch_students"
          choices={studentChoices}
          optionText={studentOptionRenderer}
          optionValue="write_data"
        />
        <TextInput source="sessionCount" label="Session Count"/>
        <ArrayInput source="schedule">
          <SimpleFormIterator>
            <AutocompleteInput
              label="Day"
              source="day"
              choices={[
                { id: "Monday", name: "Monday" },
                { id: "Tuesday", name: "Tuesday" },
                { id: "Wednesday", name: "Wednesday" },
                { id: "Thursday", name: "Thursday" },
                { id: "Friday", name: "Friday" },
                { id: "Saturday", name: "Saturday" },
                { id: "Sunday", name: "Sunday" },
              ]}
            />
            <TextInput source="time" type={"time"} label="Time" />
            <TextInput source="duration" label="Duration"/>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
