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
  SelectArrayInput,
  SingleFieldList,
  ChipField,
  AutocompleteInput
} from "react-admin";
import { useDataProvider } from 'react-admin';
import RichTextInput from "ra-input-rich-text";
import { FirebaseReferenceField, FirebaseReferenceInput } from './FirebaseReferenceFields';

// const BatchFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="title" alwaysOn />
//   </Filter>
// );

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );






export const BatchList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
    >
    <Datagrid>
    <TextField source="batch_id" label = "BatchID" />
    <TextField source="course_name" />
    <TextField source="teacher_name" />
    <TextField source="students" />
    <TextField source="start_date" />
    <DateField source="end_date" />
    <TextField source="updatedby" />
    <TextField source="createdby" />
    <RichTextField source="comments" />
    <ReferenceField label="Student Ref" source="first_name.___refid" reference="students">
    <TextField source="first_name" />
    </ReferenceField>
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
  <TextField source="batch_id" label = "BatchID" />
  <TextField source="Students" label = "BatchID" />
  </SimpleShowLayout>
  </Show>
);
export const BatchCreate2 = (props) => {
  const dataProvider = useDataProvider();
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("students", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "student_id", order: "first_name" },
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

  const student_choices = students.map((student) => ({
    id: student.student_id,
    name: student.first_name,
  }));

  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput source="student" choices={student_choices} />
      </SimpleForm>
    </Create>
  );
};


export const BatchCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {//<SelectInput source="student_id" choices={project_choices} />
      }
      <TextInput source="batch_id" label = "BatchID" />

      <ReferenceInput label="Teacher" source="name" reference="teachers" filter={{ active: true }}>
        <AutocompleteInput optionText="name"  optionValue  ="teacher"/>
      </ReferenceInput>
      
      <ReferenceInput
        label="Course"
        source="name"
        reference="courses"
        // filter={{ isAdmin: true }}
        >
        <SelectInput optionText= "name" />
      </ReferenceInput>
      <ReferenceArrayInput source="students" reference="students">
        <SelectArrayInput optionText="first_name" translateChoice={false}/>
      </ReferenceArrayInput>
      <ReferenceInput
        source="students"
        reference="students">

        <AutocompleteInput optionText="first_name" />
      </ReferenceInput>
      <DateInput source="start_date" />
      <DateInput source="end_date"  parse={val => new Date(val)} />
      <RichTextInput source="comments" />
    </SimpleForm>
  </Create>
);

export const BatchEdit = (props) => (
<Edit {...props}>
<SimpleForm>
<TextInput disabled source="batch_id" label = "BatchID" />
<ReferenceInput
label="Teacher"
source="teacher_name"
reference="teachers"
// filter={{ isAdmin: true }}
>
<SelectInput optionText="teacher_name" />
</ReferenceInput>
<ReferenceInput
label="Course"
source="name"
reference="courses"
// filter={{ isAdmin: true }}
>
<SelectInput optionText="name" />
</ReferenceInput>
<ReferenceArrayInput source="Students" reference="students">
<SelectArrayInput optionText="first_name" translateChoice={false}/>
</ReferenceArrayInput>
<DateInput source="start_date" />
<DateInput source="end_date"  parse={val => new Date(val)} />
<RichTextInput source="comments" />
</SimpleForm>
</Edit>
);


export const ActivityCreate = (props) => {
  const dataProvider = useDataProvider();
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("students", {
        pagination: { page: 1, perPage: 100 },
        filter: {},
      })
      .then(({ data }) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!projects) return null;

  const project_choices = projects.map((project) => ({
    student_id: project.student_id,
    first_name: project.first_name,
    last_name: project.last_name,
  }));

  console.log("project_choice : " , project_choices);
  //const optionRenderer = choice => `${project_choices.student_id} ${project_choices.last_name}`;
  //console.log("option renderer : " , optionRenderer);
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput label="Students" source="student_id" reference="students">
          <AutocompleteInput source="student_id" choices={project_choices} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

