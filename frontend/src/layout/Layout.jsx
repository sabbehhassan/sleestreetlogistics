import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import CarrierAgreementModal from "../components/CarrierAgreementModal";

const Layout = () => {
  const [openAgreement, setOpenAgreement] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-[75px] lg:pt-[105px]">
        <Outlet context={{ setOpenAgreement }} />
      </main>

      <CarrierAgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />

      <Footer />
    </>
  );
};

export default Layout;