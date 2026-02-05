import { type RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";

export const PagesUser = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
] as RouteObject[];
