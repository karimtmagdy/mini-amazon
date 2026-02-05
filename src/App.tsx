import {
  createBrowserRouter as Create,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import { PagesError } from "@/routes/error.routes";
import { PagesAuth } from "@/routes/auth.routes";
import { PagesUser } from "@/routes/user.routes";

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
