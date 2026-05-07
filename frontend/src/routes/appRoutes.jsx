import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ScrollToTop from "../components/scrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact"; 
import Services from "../pages/Services";


// Wrap layout with ScrollToTop
const withScrollToTop = (element) => (
  <>
    <ScrollToTop />
    {element}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withScrollToTop(<Layout />),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      }
    ],
  },
]);

export default router;