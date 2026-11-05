import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[75px] lg:pt-[105px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
