import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import DonationDetails from "../pages/DonationDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
function waitForThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited for 3 seconds");
    }, 3000); // 3000 milliseconds = 3 seconds
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation-details/:id",
        loader: async () => {
          await waitForThreeSeconds();
          const res = await fetch("/data.json");
          const data = await res.json();
          return data;
        },
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
]);

export default router;
