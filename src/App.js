import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountTypePage from "./pages/AccountTypePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import CreateAccount from "./pages/CreateAccount";
import HomeScreen from "./pages/HomeScreen";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setSpinner(false), 3000);
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
      path: "create-account",
      element: <CreateAccount />,
    },
    {
      path: "home-screen",
      element: <HomeScreen/>,
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
