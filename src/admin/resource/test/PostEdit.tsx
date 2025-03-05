import { Edit, SimpleForm, TextInput } from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled /> {/* ID 不可編輯 */}
      <TextInput source="title" label="標題" />
      <TextInput source="body" label="內容" multiline />
    </SimpleForm>
  </Edit>
);