import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit"> {/* 點擊行跳轉到編輯頁 */}
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />    {/* 編輯按鈕 */}
      <DeleteButton />  {/* 刪除按鈕 */}
    </Datagrid>
  </List>
);