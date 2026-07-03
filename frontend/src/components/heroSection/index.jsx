import heroBg from "../../assets/images/hero.jpeg";
import {
  FaArrowRight,
  FaCheckCircle,
  FaTruckMoving,
} from "react-icons/fa";

const HeroSection = ({ setOpenAgreement }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FFF4FB]">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#ff1493]/15 blur-[140px]" />
      <div className="absolute -bottom-36 -right-32 h-[380px] w-[380px] rounded-full bg-[#1a1a4d]/15 blur-[140px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(#1a1a4d 1px, transparent 1px),
          linear-gradient(90deg,#1a1a4d 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid min-h-[72vh] lg:min-h-[82vh] items-center gap-12 lg:gap-16 py-10 lg:py-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#ff1493]/20 bg-white/80 px-4 py-2 backdrop-blur-xl shadow-md">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] text-sm text-white">

                <FaTruckMoving />

              </div>

              <div className="text-left">

                <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                  Trusted USA Dispatch Company
                </p>

                <p className="text-sm font-semibold text-[#1a1a4d]">
                  Professional Freight Management
                </p>

              </div>

            </div>

            {/* Heading */}

            <h1 className="text-2xl font-extrabold leading-tight text-[#1a1a4d] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

              Keep Your

              <span className="block">

                Trucks

                <span className="bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-transparent">
                  {" "}
                  Moving
                </span>

              </span>

              <span className="mt-2 block text-[#2E2E38]">
                With Expert Dispatch
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:text-base lg:mx-0 lg:text-lg">

              Slee Street Logistics LLC helps owner operators and trucking
              companies maximize revenue through professional dispatching,
              dedicated dispatch managers, paperwork assistance, and access to
              high-paying freight opportunities across the United States.

            </p>

            {/* Trust Features */}

            <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">

              <div className="flex items-center gap-2">

                <FaCheckCircle className="text-lg text-[#ff1493]" />

                <span className="text-sm font-medium text-gray-700">
                  Dedicated Dispatcher
                </span>

              </div>

              <div className="flex items-center gap-2">

                <FaCheckCircle className="text-lg text-[#ff1493]" />

                <span className="text-sm font-medium text-gray-700">
                  24/7 Support
                </span>

              </div>

              <div className="flex items-center gap-2">

                <FaCheckCircle className="text-lg text-[#ff1493]" />

                <span className="text-sm font-medium text-gray-700">
                  Best Rate Negotiation
                </span>

              </div>

              <div className="flex items-center gap-2">

                <FaCheckCircle className="text-lg text-[#ff1493]" />

                <span className="text-sm font-medium text-gray-700">
                  No Forced Dispatch
                </span>

              </div>

            </div>
                        {/* CTA Buttons */}

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <button
                onClick={() => setOpenAgreement(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#ff1493]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#ff1493]/40"
              >
                Become a Carrier

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

              </button>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1a1a4d] bg-white px-6 py-3 text-sm font-semibold text-[#1a1a4d] transition-all duration-300 hover:bg-[#1a1a4d] hover:text-white"
              >
                Get Free Consultation
              </a>

            </div>

            {/* Trust Row */}

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium text-gray-500 lg:justify-start">

              <span>✔ FMCSA Compliant</span>

              <span>✔ Owner Operators</span>

              <span>✔ Carrier Support</span>

              <span>✔ Fast Setup</span>

            </div>

            {/* Statistics */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              {/* Card */}

              <div className="group rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <h2 className="bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-3xl font-black text-transparent lg:text-4xl">
                  500+
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Successful Loads Delivered
                </p>

              </div>

              {/* Card */}

              <div className="group rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <h2 className="bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-3xl font-black text-transparent lg:text-4xl">
                  98%
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Client Satisfaction
                </p>

              </div>

              {/* Card */}

              <div className="group rounded-2xl border border-white/60 bg-white/80 p-5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <h2 className="bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-3xl font-black text-transparent lg:text-4xl">
                  24/7
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  Dispatch Availability
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE START */}

          <div className="relative flex items-center justify-center">
                      {/* Glow Behind Image */}

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="h-[260px] w-[260px] rounded-full bg-gradient-to-r from-[#1a1a4d]/20 to-[#ff1493]/20 blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]" />

          </div>

          {/* Main Image */}

          <div className="relative z-10 overflow-hidden rounded-3xl border border-white/40 bg-white/20 p-2 shadow-[0_20px_60px_rgba(26,26,77,0.20)] backdrop-blur-xl">

            <div className="overflow-hidden rounded-2xl">

              <img
                src={heroBg}
                alt="Slee Street Logistics"
                className="h-[260px] w-full max-w-[340px] object-cover transition duration-700 hover:scale-105 sm:h-[330px] sm:max-w-[430px] lg:h-[460px] lg:max-w-[540px]"
              />

            </div>

          </div>

          {/* Floating Card Top */}

          <div className="absolute -left-5 top-10 hidden xl:block">

            <div className="w-52 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] text-xl text-white">

                🚚

              </div>

              <h3 className="text-2xl font-black text-[#1a1a4d]">
                10+
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Years of Dispatch Experience
              </p>

            </div>

          </div>

          {/* Floating Card Bottom */}

          <div className="absolute -right-5 bottom-10 hidden xl:block">

            <div className="w-56 rounded-2xl border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs text-gray-500">
                    Weekly Freight
                  </p>

                  <h3 className="mt-2 bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] bg-clip-text text-3xl font-black text-transparent">
                    500+
                  </h3>

                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] text-2xl text-white">

                  📦

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Glass Card */}

          <div className="absolute bottom-2 left-5 hidden xl:flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-xl">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] text-white">

              ✓

            </div>

            <div>

              <p className="text-xs text-gray-500">
                Trusted By
              </p>

              <h4 className="text-sm font-bold text-[#1a1a4d]">
                Owner Operators Nationwide
              </h4>

            </div>

          </div>

        </div>
          </div>
                  </div>


      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-20 lg:h-28 w-full bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 lg:h-72 lg:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1493]/5 blur-[120px]" />

    </section>
  );
};

export default HeroSection;