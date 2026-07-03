import {
  FaBars,
  FaGlobeAmericas,
  FaUsers,
  FaKey,
} from "react-icons/fa";

import jbHunt from "../../assets/images/jb-hunt.png";
import oldDominion from "../../assets/images/old-dominion.png";
import southernFreight from "../../assets/images/southern-freight.png";
import fedex from "../../assets/images/fedex.png";

const partners = [
  { image: jbHunt, alt: "JB Hunt" },
  { image: oldDominion, alt: "Old Dominion" },
  { image: southernFreight, alt: "Southern Freight" },
  { image: fedex, alt: "FedEx" },
];

const stats = [
  {
    icon: <FaBars />,
    title: "Shipments Monthly",
    value: "+15,000",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "States Served",
    value: "+40",
  },
  {
    icon: <FaUsers />,
    title: "Client Satisfaction",
    value: "98%",
  },
  {
    icon: <FaKey />,
    title: "Support Availability",
    value: "24/7",
  },
];

const Industries = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F4FF] py-24 sm:py-28">
      {/* Soft Background Effects */}
      <div className="absolute left-[-180px] top-10 h-[360px] w-[360px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-160px] h-[340px] w-[340px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
            Trusted Logistics Network
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl lg:text-6xl">
            Connecting Industry Leaders Through Modern Logistics
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5A5370] sm:text-lg">
            We collaborate with recognized freight companies and logistics
            providers to ensure secure, scalable, and reliable transportation
            solutions.
          </p>
        </div>

        {/* Moving Logos Section */}
        <div className="relative mt-16 overflow-x-auto scrollbar-hide sm:mt-20">
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-r from-[#F7F4FF] to-transparent sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-24 bg-gradient-to-l from-[#F7F4FF] to-transparent sm:block" />

          <div
            className="flex w-max gap-4 px-2 sm:animate-marquee sm:gap-6"
            style={{ minWidth: "100%" }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex min-w-[135px] items-center justify-center rounded-2xl border border-[#7A2CFF]/10 bg-white p-5 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)] sm:min-w-[220px] sm:p-7"
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-10 max-w-[95px] object-contain sm:h-14 sm:max-w-[150px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 sm:mt-28">
          <div className="mb-12 text-center sm:mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D92BC8] sm:text-sm">
              Performance Metrics
            </span>

            <h3 className="mt-4 text-3xl font-extrabold text-[#08051A] sm:text-4xl md:text-5xl">
              Trusted Results That Speak For Us
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-7 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F02BCB]/10 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/15" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4FF] text-2xl text-[#5B22C8] transition-all duration-300 group-hover:bg-[#5B22C8] group-hover:text-white">
                  {item.icon}
                </div>

                <h4 className="mt-8 text-4xl font-extrabold text-[#08051A]">
                  {item.value}
                </h4>

                <p className="mt-3 text-sm leading-6 text-[#5A5370]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Industries;