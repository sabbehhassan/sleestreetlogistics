import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ScrollToTop from "../components/scrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import CarrierAgreementPage from "../components/CarrierAgreementModal/CarrierAgreementPage";
import CarrierForm from "../pages/carrierForm";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// Wrap layout with ScrollToTop
const withScrollToTop = (element) => (
  <>
    <ScrollToTop />
    {element}
  </>
);

const router = createBrowserRouter([
  {
    path: "/carrier-agreement",
    element: <CarrierAgreementPage />,
  },

  // New Carrier Application Form
  {
    path: "/carrier-form",
    element: <CarrierForm />,
  },

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
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;