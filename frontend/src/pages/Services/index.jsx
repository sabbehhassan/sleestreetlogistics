import { useState } from "react";
import {
  FaTruckMoving,
  FaWarehouse,
  FaBoxes,
  FaArrowRight,
} from "react-icons/fa";

import heroBg from "../../assets/servicesvid.mp4";
import serviceTruck from "../../assets/new/3.png";

import RentedTrailerProgram from "../../components/rentalTrailer";
import TwicCardAssistance from "../../components/twicCard";
import InsuranceApplicationAssistance from "../../components/insuranceApplication";
import FactoringRegistration from "../../components/factoringRegister";

import AgreementModal from "../../components/CarrierAgreementModal";

const services = [
  {
    icon: <FaTruckMoving />,
    title: "Ground Freight",
    desc: "Reliable trucking and road freight services with fast delivery schedules and secure cargo handling.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Secure storage facilities with inventory management and distribution support.",
  },
  {
    icon: <FaBoxes />,
    title: "Packaging Solutions",
    desc: "Professional packaging services to ensure your products remain protected in transit.",
  },
];

const Services = () => {
  // AGREEMENT MODAL STATE
  const [openAgreement, setOpenAgreement] = useState(false);

  return (
    <>
      <section className="bg-[#f3f4f6]">

        {/* Hero */}
        <div className="relative h-[620px]">
          <video
            autoPlay
            loop
            muted
            src={heroBg}
            alt="Services Hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                Our Services
              </h1>

              <p className="text-white text-base md:text-lg mt-4 max-w-2xl mx-auto">
                Premium logistics services designed to move your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Logistics Solutions Built For Modern Business
          </h2>

          <div className="w-[120px] h-[3px] bg-[#0B7BEA] mx-auto mt-5"></div>

          <p className="text-gray-700 text-base leading-8 max-w-3xl mx-auto mt-8">
            We provide comprehensive transportation and logistics services with a
            strong focus on reliability, efficiency, and customer satisfaction.
          </p>
        </div>

        {/* Featured Service Layout */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-sm overflow-hidden">

            <div>
              <img
                src={serviceTruck}
                alt="Featured Service"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="p-10">

              <span className="text-[#0B7BEA] font-semibold uppercase tracking-wider text-sm">
                Featured Service
              </span>

              <h2 className="text-3xl font-bold text-black mt-3 leading-tight">
                End-to-End Freight Transportation Services
              </h2>

              <p className="text-gray-700 leading-8 text-sm md:text-base mt-6">
                We specialize in efficient freight movement across local and
                international markets. Our logistics network ensures fast, secure,
                and cost-effective transportation.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-[#f5f5f5] rounded-xl p-4 text-center">
                  <h3 className="text-2xl font-bold text-[#0B7BEA]">24/7</h3>
                  <p className="text-sm text-gray-600 mt-1">Support</p>
                </div>

                <div className="bg-[#f5f5f5] rounded-xl p-4 text-center">
                  <h3 className="text-2xl font-bold text-[#0B7BEA]">120+</h3>
                  <p className="text-sm text-gray-600 mt-1">Countries</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto px-6 pb-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-500"
              >

                <div className="w-[70px] h-[70px] rounded-2xl bg-[#0B7BEA] flex items-center justify-center text-white text-2xl group-hover:rotate-6 transition duration-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-black mt-6">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mt-4">
                  {service.desc}
                </p>

                <button className="mt-6 text-[#0B7BEA] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Explore Service
                  <FaArrowRight />
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* RENTAL TRAILER */}
        <RentedTrailerProgram
          setOpenAgreement={setOpenAgreement}
        />

        <TwicCardAssistance
          setOpenAgreement={setOpenAgreement}
        />
        <InsuranceApplicationAssistance
          setOpenAgreement={setOpenAgreement}
        />
        <FactoringRegistration
          setOpenAgreement={setOpenAgreement}
        />

      </section>

      {/* AGREEMENT MODAL */}
      <AgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Services;