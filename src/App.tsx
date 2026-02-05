import {
  createBrowserRouter as Create,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { PagesError } from "@/core/router/error.routes";
import { PagesAuth } from "@/core/router/auth.routes";
import { PagesUser } from "@/core/router/user.routes";

export function App() {
  const router = Create([
    {
      path: "/",
      element: <RootLayout />,
      children: [...PagesUser, ...PagesError, ...PagesAuth],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
