import heroBg from "../../assets/images/hero.jpeg";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = ({ setOpenAgreement }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFC]">
      <div className="absolute -top-32 -left-32 h-[340px] w-[340px] rounded-full bg-[#ff1493]/20 blur-[140px] lg:-top-40 lg:-left-40 lg:h-[500px] lg:w-[500px]"></div>
      <div className="absolute -bottom-32 -right-32 h-[340px] w-[340px] rounded-full bg-[#1a1a4d]/20 blur-[140px] lg:-bottom-40 lg:-right-40 lg:h-[500px] lg:w-[500px]"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a1a4d]/10 to-[#ff1493]/10 px-5 py-3 text-sm font-semibold text-[#1a1a4d] border border-[#ff1493]/20">
              🚛 Trusted Logistics Company
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-black leading-tight text-[#221B38] sm:text-5xl lg:text-7xl tracking-tight">
                Reliable Freight
                <span className="block bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">
                  Dispatch Solutions
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg font-medium">
                Slee Street Logistics LLC helps owner operators and carriers maximize revenue through professional dispatching, dedicated support, and reliable freight management across the United States.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => setOpenAgreement(true)}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] px-8 py-4 text-white font-semibold shadow-xl shadow-[#ff1493]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff1493]/50 hover:scale-105 active:scale-95"
              >
                Carrier Setup
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full border-2 border-[#1a1a4d] bg-transparent px-8 py-4 text-[#1a1a4d] font-semibold transition-all duration-300 hover:bg-[#1a1a4d] hover:text-white active:scale-95"
              >
                Contact Us
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="group rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] p-6 shadow-lg border border-white/80 hover:shadow-2xl hover:border-[#ff1493]/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">500+</p>
                    <p className="mt-3 text-sm font-medium text-gray-600">Loads Completed</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a4d]/10 to-[#ff1493]/10 group-hover:from-[#1a1a4d]/20 group-hover:to-[#ff1493]/20 transition-all duration-300"></div>
                </div>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] p-6 shadow-lg border border-white/80 hover:shadow-2xl hover:border-[#ff1493]/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">24/7</p>
                    <p className="mt-3 text-sm font-medium text-gray-600">Dispatch Support</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a4d]/10 to-[#ff1493]/10 group-hover:from-[#1a1a4d]/20 group-hover:to-[#ff1493]/20 transition-all duration-300"></div>
                </div>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-white to-[#F8F9FA] p-6 shadow-lg border border-white/80 hover:shadow-2xl hover:border-[#ff1493]/30 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">98%</p>
                    <p className="mt-3 text-sm font-medium text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a4d]/10 to-[#ff1493]/10 group-hover:from-[#1a1a4d]/20 group-hover:to-[#ff1493]/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[320px] w-[320px] rounded-full bg-gradient-to-r from-[#1a1a4d]/15 to-[#ff1493]/15 blur-3xl lg:h-[420px] lg:w-[420px]"></div>
            </div>

            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/50 shadow-2xl" style={{boxShadow: '0 25px 60px rgba(26, 26, 77, 0.25), 0 0 60px rgba(255, 20, 147, 0.15)'}}>
              <img
                src={heroBg}
                alt="Slee Street Logistics"
                className="w-full max-w-[520px] h-auto object-contain"
              />
            </div>

            <div className="hidden lg:absolute lg:left-0 lg:top-16 lg:flex lg:w-52 lg:flex-col lg:gap-3 lg:rounded-2xl lg:bg-white lg:px-6 lg:py-5 lg:text-left lg:shadow-2xl lg:border lg:border-[#ff1493]/20 lg:backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a1a4d]">Experience</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">10+ Years</span>
            </div>

            <div className="hidden lg:absolute lg:right-0 lg:bottom-16 lg:flex lg:w-52 lg:flex-col lg:gap-3 lg:rounded-2xl lg:bg-white lg:px-6 lg:py-5 lg:text-left lg:shadow-2xl lg:border lg:border-[#ff1493]/20 lg:backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a1a4d]">Available</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
