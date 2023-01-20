import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountType from "./components/AccountType";
import AccountTypePage from "./pages/AccountTypePage";
import Modal from "./components/Modal";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import WorkPlace from "./pages/WorkPlace";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import Account from "./components/Account";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
// import { SignIn } from "phosphor-react";

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
      {/* <Modal
        visible={true}
        desc="Sucessful!"
        txt="Please wait a moment, we are preparing for you..."
      /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
