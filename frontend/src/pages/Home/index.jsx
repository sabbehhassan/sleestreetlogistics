import { useState } from "react";
import HeroSection from "../../components/heroSection";
import Services from "../../components/services";
import Industries from "../../components/industries";
import Testimonials from "../../components/testimonials";
import AgreementModal from "../../components/CarrierAgreementModal";

const Home = () => {
  const [openAgreement, setOpenAgreement] = useState(false);

  return (
    <>
      <HeroSection setOpenAgreement={setOpenAgreement} />

      <Industries />
      <Services setOpenAgreement={setOpenAgreement} />
      <Testimonials />

      <AgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Home;
