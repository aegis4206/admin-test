import { Layout, LayoutProps } from "react-admin";
import SideBarMenu from "./SideBarMenu";

const AdminLayout = (props: LayoutProps) =>
    <Layout {...props} menu={SideBarMenu} />;

export default AdminLayout;