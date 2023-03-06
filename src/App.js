import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountTypePage from "./pages/AccountTypePage";
import FindFriends from "./pages/FindFriends";
import DiscoverPage from "./components/home-screen/DiscoverPage";
import Collections from "./pages/Collections";
import Home from "./pages/Home";
import Search from "./components/home-screen/Search";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import Account from "./components/Account";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
import New from "./pages/New";
// import { SignIn } from "phosphor-react";

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
      path: "account",
      element: <Account />,
      errorElement: <ErrorPage />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
      errorElement: <ErrorPage />,
    },
    {
      path: "forgot",
      element: <Forgot/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "confirm",
      element: <Confirm />,
      errorElement: <ErrorPage />,
    },
    {
      path: "new",
      element: <New />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "search",
      element: <Search />,
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
      path: "find-friends",
      element: <FindFriends/>,
    },
    {
      path: "discover",
      element: <DiscoverPage/>,
    },
    {
      path: "collections",
      element: <Collections/>,
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
