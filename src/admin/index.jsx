import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Layout";
import HomeAdminPage from "./pages/home";
import UploadOrders from "./pages/orders/uploadOrders";
import AdminNotFound from "./components/NotFound";

// import rất nhiều componnetn
import AddUser from "./pages/user/addUser";
import ListUser from "./pages/user/listUser";
import TrashUser from "./pages/user/trashUser";
import UnconfirmListUser from "./pages/user/unconfirmedListUser";
import UpdateUser from "./pages/user/updateUser";

import LayoutHomePage from "./pages/system/layoutHome";
import ListProductsPage from "./pages/system/listProducts";
import SystemPostPage from "./pages/system/systemPost";

import UpdateNotify from "./pages/notification/updateNotify";
import TrashNotify from "./pages/notification/trashNotify";
import ListNotify from "./pages/notification/listNotify";
import AddNotify from "./pages/notification/addNotify";

import NavbarInformation from "./pages/navbar/information";
import NavbarMenu from "./pages/navbar/menu";

const AdminPages = () => {
  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<HomeAdminPage />} />
          <Route path="/upload-orders" element={<UploadOrders />} />

          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/list/:id" element={<ListUser />} />
          <Route path="/users/trash/:id" element={<TrashUser />} />
          <Route
            path="/users/unconfirm-list/:id"
            element={<UnconfirmListUser />}
          />
          <Route path="/users/update/:id" element={<UpdateUser />} />

          <Route path="/system/home" element={<LayoutHomePage />} />
          <Route path="/system/products" element={<ListProductsPage />} />
          <Route path="/system/posts/:id" element={<SystemPostPage />} />

          <Route path="/notify/update/:id" element={<UpdateNotify />} />
          <Route path="/notify/trash/:id" element={<TrashNotify />} />
          <Route path="/notify/list/:id" element={<ListNotify />} />
          <Route path="/notify/add" element={<AddNotify />} />

          <Route path="/navbar/infor" element={<NavbarInformation />} />
          <Route path="/navbar/menu" element={<NavbarMenu />} />

          <Route path="*" element={<AdminNotFound />} />
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminPages;
