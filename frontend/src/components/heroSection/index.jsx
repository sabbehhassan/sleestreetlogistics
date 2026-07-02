import heroBg from "../../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = ({ setOpenAgreement }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC]">
      <div className="absolute -top-32 -left-32 h-[340px] w-[340px] rounded-full bg-[#ff1493]/20 blur-[140px] lg:-top-40 lg:-left-40 lg:h-[500px] lg:w-[500px]"></div>
      <div className="absolute -bottom-32 -right-32 h-[340px] w-[340px] rounded-full bg-[#1a1a4d]/20 blur-[140px] lg:-bottom-40 lg:-right-40 lg:h-[500px] lg:w-[500px]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1a4d]/10 px-4 py-2 text-sm font-semibold text-[#1a1a4d]">
              🚛 Trusted Logistics Company
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-black leading-tight text-[#221B38] sm:text-5xl lg:text-6xl">
                Reliable Freight
                <span className="block bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">
                  Dispatch Solutions
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Slee Street Logistics LLC helps owner operators and carriers maximize revenue through professional dispatching, dedicated support, and reliable freight management across the United States.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => setOpenAgreement(true)}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] px-8 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105"
              >
                Carrier Setup
                <FaArrowRight />
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#ff1493] px-8 py-4 text-[#1a1a4d] font-semibold transition-all duration-300 hover:bg-[#ff1493] hover:text-white"
              >
                Contact Us
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-[#F0F0F5]">
                <p className="text-4xl font-black text-[#221B38]">500+</p>
                <p className="mt-2 text-sm text-gray-500">Loads Completed</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-[#F0F0F5]">
                <p className="text-4xl font-black text-[#221B38]">24/7</p>
                <p className="mt-2 text-sm text-gray-500">Dispatch Support</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm border border-[#F0F0F5]">
                <p className="text-4xl font-black text-[#221B38]">98%</p>
                <p className="mt-2 text-sm text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[320px] w-[320px] rounded-full bg-gradient-to-r from-[#1a1a4d]/10 to-[#ff1493]/10 blur-3xl lg:h-[420px] lg:w-[420px]"></div>
            </div>

            <img
              src={heroBg}
              alt="Slee Street Logistics"
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.15)]"
            />

            <div className="hidden lg:absolute lg:left-0 lg:top-16 lg:flex lg:w-44 lg:flex-col lg:gap-2 lg:rounded-3xl lg:bg-white lg:px-4 lg:py-4 lg:text-left lg:shadow-xl lg:border lg:border-gray-100">
              <span className="text-sm text-gray-500">Experience</span>
              <span className="text-lg font-bold text-[#221B38]">10+ Years</span>
            </div>

            <div className="hidden lg:absolute lg:right-0 lg:bottom-16 lg:flex lg:w-44 lg:flex-col lg:gap-2 lg:rounded-3xl lg:bg-white lg:px-4 lg:py-4 lg:text-left lg:shadow-xl lg:border lg:border-gray-100">
              <span className="text-sm text-gray-500">Available</span>
              <span className="text-lg font-bold text-[#221B38]">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
