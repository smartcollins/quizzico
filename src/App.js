import { useEffect, useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountTypePage from "./pages/AccountTypePage";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import Account from "./pages/Account";
import HomeScreen from "./pages/HomeScreen";
import FindFriends from "./pages/FindFriends";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setSpinner(false), 2500);
    return () => timeOut;
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Carousel />,
      errorElement: <ErrorPage />,
    },
    {
      path: "occupation",
      element: <ProgressBar />,
      children: [
        { index: true, element: <AccountTypePage /> },
        {
          path: "workplace",
          element: <WorkPlace />,
        },
      ],
    },
    {
      path: "account",
      element: <Account />,
    },
    {
      path: "home-screen",
      element: <HomeScreen/>,
    },
    {
      path: "find-friends",
      element: <FindFriends/>,
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
