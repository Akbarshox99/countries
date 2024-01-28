import React from "react";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layout
import MainLayout from './layouts/MainLayout'

// pages
import Home, { fetchApi } from "./pages/Home";
import Detail, {fetchCountry} from "./pages/Detail";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} loader={fetchApi}/>
          <Route path="/:name" element={<Detail />} loader={fetchCountry} />
      </Route>
    )
  );

  return (
      <RouterProvider router={router} />
  );
};

export default App;
