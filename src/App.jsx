import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Courses from "./pages/Courses/Courses";
import CourseView from "./pages/CourseView/CourseView";
import Articles from "./pages/Articles/Articles";
import ArticleView from "./pages/ArticleView/ArticleView";
import Search from "./pages/Search/Search";
import Layout from "./ui/Layout";
import AppProvider from "./context/AppContext";
import Loading from "./features/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Register /> },
      { path: "/loading", element: <Loading /> },
      { path: "/signin", element: <Login /> },
      { path: "/courses", element: <Courses /> },
      { path: "/course/:coursename", element: <CourseView /> },
      { path: "/articles", element: <Articles /> },
      { path: "/articles/:articlename", element: <ArticleView /> },
      { path: "/articles", element: <Articles /> },
      { path: "/search/:q", element: <Search /> },
    ],
  },
  {
    path: "/panel",
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
