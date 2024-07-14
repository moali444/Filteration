import i18n from "i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />

      <ToastContainer />
    </>
  );
};

export default App;
