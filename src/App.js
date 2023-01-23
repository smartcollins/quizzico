import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountType from "./components/AccountType";
import AccountTypePage from "./pages/AccountTypePage";
import Progress from "./components/Progress";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";

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
      path: "/home",
      element: <Home />,
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
  ]);

  return spinner ? (
    <Loader />
  ) : (
    <div className="App h-screen">
      {/* <Progress />
      <Modal
        visible={true}
        desc="Sucessful!"
        txt="Please wait a moment, we are preparing for you..."
      /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
