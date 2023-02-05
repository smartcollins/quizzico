import { Suspense, useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountTypePage from "./pages/AccountTypePage";
import HomeScreen from "./pages/HomeScreen";
import FindFriends from "./pages/FindFriends";
import DiscoverPage from "./components/home-screen/DiscoverPage";
import Home from "./pages/Home";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import Account from "./components/Account";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
import New from "./pages/New";
import { ROUTE_PATHS } from "./assets/data_two";


function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setSpinner(false), 2500);
    return () => timeOut;
  }, []);

  const router = createBrowserRouter([
    {
      path: ROUTE_PATHS.INDEX,
      element: <Carousel />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.ACCOUNT,
      element: <Account />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.SIGNIN,
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.FORGOT,
      element: <Forgot/>,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.CONFIRM,
      element: <Confirm />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.NEW,
      element: <New />,
    },
    {
      path: ROUTE_PATHS.HOME,
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: ROUTE_PATHS.OCCUPATION,
      element: <ProgressBar />,
      children: [
        { index: true, element: <AccountTypePage /> },
        {
          path: ROUTE_PATHS.WORKPLACE,
          element: <WorkPlace />,
        },
      ],
    },
    {
      path: ROUTE_PATHS.ACCOUNT,
      element: <Account />,
    },
    {
      path: ROUTE_PATHS.HOME,
      element: <HomeScreen/>,
    },
    {
      path: ROUTE_PATHS.FINDFRIENDS,
      element: <FindFriends/>,
    },
    {
      path: ROUTE_PATHS.DISCOVER,
      element: <DiscoverPage/>,
    },
  ]);

  return spinner ? (
    <Loader />
  ) : (
    <div className="App h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
