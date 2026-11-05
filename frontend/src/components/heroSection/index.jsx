import heroBg from "../../assets/hero.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#08051A]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Slee Street Logistics"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Logo Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08051A]/95 via-[#1B0B3D]/85 to-[#D92BC8]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/90 via-transparent to-[#2A0A68]/50" />

      {/* Soft Glow Effects */}
      <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-[#8B2CFF]/30 blur-3xl" />
      <div className="absolute bottom-20 right-[-100px] h-80 w-80 rounded-full bg-[#F02BCB]/25 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center rounded-full border border-[#F02BCB]/40 bg-[#F02BCB]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A7FF] backdrop-blur-sm sm:text-sm">
              Trusted Logistics Company
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Fast & Reliable
              <span className="block bg-gradient-to-r from-[#9B5CFF] via-[#F02BCB] to-[#FFFFFF] bg-clip-text text-transparent">
                Logistics Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#E8E2FF] sm:text-lg">
              We deliver efficient transportation, warehousing, freight, and
              supply chain solutions with speed, safety, and professional care.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/carrier-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-2xl shadow-[#D92BC8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#F02BCB]/50 sm:text-base"
              >
                Become a Carrier
              </Link>

              <a
                href="#services"
                className="rounded-full border border-[#A77CFF]/40 bg-white/10 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#160832] sm:text-base"
              >
                View Services
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-[#A77CFF]/25 pt-8">
              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  24/7
                </h3>
                <p className="mt-1 text-xs font-medium text-[#CFC3FF] sm:text-sm">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  98%
                </h3>
                <p className="mt-1 text-xs font-medium text-[#CFC3FF] sm:text-sm">
                  On-Time
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  120+
                </h3>
                <p className="mt-1 text-xs font-medium text-[#CFC3FF] sm:text-sm">
                  Routes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#F7F4FF] to-transparent" />
    </section>
  );
};

export default HeroSection;
