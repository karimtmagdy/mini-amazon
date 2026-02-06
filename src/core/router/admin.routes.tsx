import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import AdminLayout from "@/layouts/AdminLayout";
export const PagesAdmin = [
  {
    path: "admin",
    Component: AdminLayout,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
] as RouteObject[];
