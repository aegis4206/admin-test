import { Create, SimpleForm, TextInput } from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="標題" />
      <TextInput source="body" label="內容" multiline />
    </SimpleForm>
  </Create>
);