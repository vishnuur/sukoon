import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import LayoutPage from "../Layout";
import Services from "../Pages/Services";
import ContactScreen from "../Pages/Contact";
import GalleryScreen from "../Pages/Gallery";
import AdminLayout from "../Admin/Layout";
import AdminDashboard from "../Admin/Pages/Dashboard";
import AdminLogin from "../Admin/Pages/Login";
import AdminRegister from "../Admin/Pages/RegisterUser";
import AdminBooking from "../Admin/Pages/TreatmentBooking";
import AdminHistory from "../Admin/Pages/ViewHistory";

const router = createBrowserRouter([
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <ContactScreen /> },
      { path: "/gallery", element: <GalleryScreen /> },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/register",
        element: <AdminRegister />,
      },
      {
        path: "/admin/booking/:registerId",
        element: <AdminBooking />,
      },
      {
        path: "admin/history/:registerId",
        element: <AdminHistory />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
]);

export default router;
