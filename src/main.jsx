import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Applied from "./Components/Applied/Applied.jsx";
import ErrorPag from "./Components/Error/ErrorPag.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Root />,
    errorElement: <ErrorPag />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <Applied />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
