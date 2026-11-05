import HeroSection from "../../components/heroSection";
import Services from "../../components/services";
import Industries from "../../components/industries";
import Testimonials from "../../components/testimonials";

const Home = () => {
  return (
    <>
      <HeroSection/>

      <Industries />
      <Services/>
      <Testimonials />
    </>
  );
};

export default Home;
