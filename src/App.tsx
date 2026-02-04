import { ComponentExample } from "@/components/component-example";
import {
  createBrowserRouter as Create,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
const router = Create([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ComponentExample />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
