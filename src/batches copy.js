import * as React from "react";
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
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
} from "react-admin";
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
//       source="student.id"
//       reference="students"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );
//<ReferenceField label="Student Ref" source="student_ref.___refid" reference="students">
//<TextField source="name" />
//</ReferenceField>

export const BatchList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
      <TextField source="batch_id" />
      <TextField source="course_id" />
      <TextField source="teacher_id" />
      <TextField source="teacher_name" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <TextField source="level" />
      <TextField source="updatedby" />
      <TextField source="createdby" />
      <RichTextField source="body" />
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
      <TextField source="id" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <TextField source="title" />
      <RichTextField source="body" />

      <ReferenceField label="Student Id" source="student_id" reference="students">
        <TextField source="name" />
      </ReferenceField>

      <ReferenceField label="Student Ref" source="student_ref.___refid" reference="students">
        <TextField source="name" />
      </ReferenceField>
      {/* Or use the easier <FirebaseReferenceField> */}
      <FirebaseReferenceField
        label="Student (Reference Doc)"
        source="student_ref"
        reference="students"
      >
        <TextField source="name" />
      </FirebaseReferenceField>

      <FileField
        source="files_multiple.src"
        title="files_multiple.title"
        multiple
      />
    </SimpleShowLayout>
  </Show>
);

export const BatchCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <DateInput source="date" parse={val => new Date(val)} />
      <ReferenceInput
        label="Student"
        source="student_id"
        reference="students"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="Teacher"
        source="teacher_id"
        reference="teachers"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="Course"
        source="course_id"
        reference="courses"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      
      <ReferenceInput
        label="Student Ref"
        source="student_ref.___refid"
        reference="students"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/* Or use the easier <FirebaseReferenceInput> */}
      <FirebaseReferenceInput
        label="Student Ref (Firebase)"
        source="student_ref"
        reference="students"
      >
        <SelectInput optionText="name" />
      </FirebaseReferenceInput>
      <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const BatchEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <ReferenceInput
        label="Student Id"
        source="student_id"
        reference="students"
        // filter={{ isAdmin: true }}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput
        label="Student Ref"
        source="student_ref.___refid"
        reference="students"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <FirebaseReferenceInput
        label="Student Ref (Firebase)"
        source="student_ref"
        reference="students"
      >
        <SelectInput optionText="name" />
      </FirebaseReferenceInput>
      <FileInput source="files_multiple" multiple label="Files with (multiple)">
        <FileField source="src" title="title" />
      </FileInput>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="sections.mySection.items" label="Section items">
        <SimpleFormIterator>
          <TextInput source="name" label="Name" />
          <ImageInput source="image" label="Image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
