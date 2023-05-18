import { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "./components/loader/Loader";
import Collections from "./pages/Collections";
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
import TopAuthors from "./pages/TopAuthors";
import { EachUser } from "./components/EachUser";
import UserQuizzo from "./pages/UserQuizzo";
import UserCollection from "./pages/UserCollection";
import UserAbout from "./pages/UserAbout";
import Library from "./pages/Library";
import MyQuizzo from "./components/library/MyQuizzo";
import Favorites from "./components/library/Favorites";
import Collabo from "./components/library/Collabo";
import Quiz from "./components/library/Quiz";
import Collection from "./components/library/Collection";
import NewCollection from "./pages/NewCollection";
import CollectionInfo from "./pages/CollectionInfo";
import CreateQuiz from "./pages/CreateQuiz";
import QuizDetails from "./components/quiz-detail/QuizDetail";
import QuRCode from "./components/quiz-detail/QuRCode";

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
      path: ROUTE_PATHS.OCCUPATION,
      element: <ProgressBar />,
      children: [
        { index: true, element: <AccountTypePage /> },
        {
          path: ROUTE_PATHS.WORKPLACE,
          element: <WorkPlace />,
        },
        {
          path: ROUTE_PATHS.ACCOUNT,
          element: <Account />,
          errorElement: <ErrorPage />,
        },
      ],
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
      path: ROUTE_PATHS.COLLECTIONS,
      element: <Collections/>,
    },
    {
      path: ROUTE_PATHS.COLLECTIONSINFO,
      element: <CollectionInfo/>,
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
    {
      path: ROUTE_PATHS.LIBRARY,
      element: <Library />,
      children: [
        {
          element: <MyQuizzo />,
          path: ROUTE_PATHS.LIBRARY_QUIZ,
          children: [
            { element: <Quiz />, index: true },
            {
              element: <Collection />,
              path: ROUTE_PATHS.LIBRARY_QUIZ_COLLECTION,
            },
          ],
        },
        {
          path: ROUTE_PATHS.LIBRARY_FAVORITES,
          element: <Favorites />,
          index: true,
        },
        {
          path: ROUTE_PATHS.LIBRARY_COLLABO,
          element: <Collabo />,
        },
      ],
    },
    {
      path: ROUTE_PATHS.NEWCOLLECTION,
      element: <NewCollection />,
    },
    {
      path: ROUTE_PATHS.CREATEQUIZ,
      element: <CreateQuiz/>
    },
    {
      path: ROUTE_PATHS.QUIZDETAILS,
      element: <QuizDetails/>
    },
    {
      path: ROUTE_PATHS.QURCODE,
      element: <QuRCode/>
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
