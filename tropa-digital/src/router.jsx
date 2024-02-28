import { createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  RegistrationSection,
  LoginSection,
} from "./pages/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSection />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/registrationsection",
    element: <RegistrationSection />,
  },
]);

export default router;
