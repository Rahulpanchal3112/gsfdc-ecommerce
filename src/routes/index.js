import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "../pages/Homepage";
import Layout from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
