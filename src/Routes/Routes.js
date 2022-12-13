import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Projects/Projects";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/projects',
                        element: <Projects></Projects>
                  },
                  {
                        path: '/about',
                        element: <About></About>
                  },
                  {
                        path: '/contact',
                        element: <Contact></Contact>
                  },
            ]
      }
]);

export default router;