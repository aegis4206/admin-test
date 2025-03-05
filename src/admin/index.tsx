import React from 'react'
import { Admin, ListGuesser, Resource, LayoutProps, CustomRoutes } from 'react-admin'
import jsonServerProvider from "ra-data-json-server";
import AdminLayout from './Layout';
import Breadcrumbs from './Breadcrumbs';
import { Route } from "react-router-dom";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const Layout = ({ children }: LayoutProps) => {
    return <AdminLayout>
        <Breadcrumbs></Breadcrumbs>
        {children}
    </AdminLayout>
}
const App = () => {

    return (
        <Admin dataProvider={dataProvider} layout={Layout}>
            <CustomRoutes>
                <Route path="/" element={<>首頁</>} />
                <Route path="/admin_user" element={<>管理員管理</>} />
            </CustomRoutes>
            <Resource name="/" list={ListGuesser} />
            <Resource name="/test3" list={ListGuesser} />
            <Resource name="/test2" list={ListGuesser} />
            <Resource name="/posts" list={ListGuesser} />
        </Admin>
    )
}

export default App