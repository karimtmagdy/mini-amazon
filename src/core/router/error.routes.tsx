import { type RouteObject } from "react-router-dom";
import UnauthorizedPage from "@/pages/secure/UnauthorizedPage";
import NotFoundPage from "@/pages/secure/NotFoundPage";
import ForbiddenPage from "@/pages/secure/ForbiddenPage";

export const PagesError = [
  { path: "*", element: <NotFoundPage /> },
  { path: "forbidden", element: <ForbiddenPage /> },
  { path: "unauthorized", element: <UnauthorizedPage /> },
] as RouteObject[];
