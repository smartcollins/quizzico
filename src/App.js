import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Carousel from "./components/Carousel";
import AccountType from "./components/AccountType";
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

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setSpinner(false), 3500);
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
      element: <ProgressBar/>,
      children: [
        { index:true, element: <AccountTypePage /> },
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
