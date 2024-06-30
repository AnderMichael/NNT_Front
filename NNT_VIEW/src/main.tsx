import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RankingPage from "./pages/ranking/RankingPage";
import MissionsPage from "./pages/missions/MissionsPage";
import EventPage from "./pages/event/EventPage";
import ProfilePage from "./pages/profile/ProfilePage";
import MissionsEventPage from './pages/event/MissionsEventPage';

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
  {
    path: "/event/missions",
    element: <MissionsEventPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
