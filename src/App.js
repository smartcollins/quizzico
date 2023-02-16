import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindFriends from "./pages/FindFriends";
import DiscoverPage from "./pages/DiscoverPage";
import ErrorPage from "./pages/ErrorPage";
import ProgressBar from "./components/ProgressBar";
import Account from "./components/Account";
import SignIn from "./pages/SignIn";
import Forgot from "./pages/Forgot";
import Confirm from "./pages/Confirm";
import New from "./pages/New";
import { ROUTE_PATHS } from "./assets/data_two";
import Loader from "./components/loader/Loader";
import TopAuthors from "./pages/TopAuthors";
import { EachUser } from "./components/EachUser";
import UserQuizzo from "./pages/UserQuizzo";
import UserCollection from "./pages/UserCollection";
import UserAbout from "./pages/UserAbout";

const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const WorkPlace = lazy(() => import("./pages/WorkPlace"));
const AccountTypePage = lazy(() => import("./pages/AccountTypePage"));
const Carousel = lazy(() => import("./components/intro/Carousel"));

function App() {
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
      element: <Forgot />,
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
      element: <HomeScreen />,
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
      path: ROUTE_PATHS.FINDFRIENDS,
      element: <FindFriends />,
    },
    {
      path: ROUTE_PATHS.DISCOVER,
      element: <DiscoverPage />,
    },
    {
      path: ROUTE_PATHS.TOPAUTHORS,
      element: <TopAuthors />,
    },
    {
      path: ROUTE_PATHS.TOPAUTHORSID,
      element: <EachUser />,
      children: [
        {
          index: true,
          element: <UserQuizzo />,
        },
        {
          path: ROUTE_PATHS.USERCOLLECTION,
          element: <UserCollection />,
        },
        {
          path: ROUTE_PATHS.USERABOUT,
          element: <UserAbout />,
        },
      ],
    },
  ]);

  return (
    <div className="App h-screen">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
