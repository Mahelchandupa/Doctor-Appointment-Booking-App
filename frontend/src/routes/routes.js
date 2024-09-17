import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";
import MyAppointments from "../pages/MyAppointments";
import Appointment from "../pages/Appointment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctors/:specialty",
        element: <Doctors />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/my-profile",
        element: <MyProfile />
      },
      {
        path: "/my-appointments",
        element: <MyAppointments />
      },
      {
        path: "/appointment/:docId",
        element: <Appointment />
      }
    ],
  },
]);

export default routes;