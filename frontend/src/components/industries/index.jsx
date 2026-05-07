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
    <section className="relative bg-[#f7f9fc] py-28 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0B7BEA]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#0B7BEA]/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block bg-[#0B7BEA]/10 text-[#0B7BEA] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-[2px]">
            Trusted Logistics Network
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0B1C39] mt-6 leading-tight">
            Connecting Industry Leaders Through Modern Logistics
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            We collaborate with globally recognized freight companies and logistics
            providers to ensure secure, scalable, and reliable transportation solutions.
          </p>

        </div>

        {/* Moving Logos Section */}
        <div className="mt-24 relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#f7f9fc] to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f7f9fc] to-transparent z-10"></div>

          <div className="flex w-max animate-marquee gap-8">

            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="min-w-[230px] bg-white rounded-[30px] p-8 flex items-center justify-center border border-[#edf2f7] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="h-[65px] object-contain"
                />
              </div>
            ))}

          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-32">

          <div className="text-center mb-16">

            <span className="text-[#0B7BEA] uppercase tracking-[3px] font-semibold text-sm">
              Performance Metrics
            </span>

            <h3 className="text-3xl md:text-5xl font-bold text-[#0B1C39] mt-4">
              Trusted Results That Speak For Us
            </h3>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[35px] p-8 border border-[#edf2f7] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B7BEA] to-[#49A6FF]"></div>

                {/* Glow */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#0B7BEA]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B7BEA]/10 text-[#0B7BEA] flex items-center justify-center text-2xl group-hover:bg-[#0B7BEA] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                {/* Value */}
                <h4 className="text-4xl font-bold text-[#0B1C39] mt-8">
                  {item.value}
                </h4>

                {/* Title */}
                <p className="text-gray-600 mt-3 text-sm leading-6">
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
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Industries;