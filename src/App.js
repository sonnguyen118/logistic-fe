// import React from 'react';
// import TodoList from './features/todos/TodoList';
// import AddTodoForm from './features/todos/AddTodoForm';

// function App() {
//   return (
//     <div>
//       <TodoList />
//       <AddTodoForm />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import Products from "./pages/Products";
import OrderDetailPage from "./pages/OrderDetailPage";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import AdminPage from "./admin/index";

import "./styles/sass/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/information" element={<Information />} />
        <Route exact path="/information/account" element={<Information />} />
        <Route
          exact
          path="/information/order-status"
          element={<Information />}
        />
        <Route
          path="/information/order-status/:id"
          element={<OrderDetailPage />}
        />
        <Route exact path="/information/notify" element={<Information />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
