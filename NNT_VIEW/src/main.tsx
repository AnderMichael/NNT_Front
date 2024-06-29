import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RankingPage from "./pages/ranking/RankingPage";
import MissionsPage from "./pages/missions/MissionsPage";
import EventPage from "./pages/event/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
  },
  {
    path: "/missions",
    element: <MissionsPage />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
