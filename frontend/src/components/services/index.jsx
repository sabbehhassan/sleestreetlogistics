import {
  FaKey,
  FaAmazon,
  FaBuilding,
} from "react-icons/fa";

import service1 from "../../assets/new/7.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/new/4.png";

const servicesData = [
  {
    icon: <FaKey />,
    image: service1,
    title: "Dedicated Lanes",
    desc: "Reliable trucking routes designed for consistent delivery performance and long-term freight partnerships.",
  },
  {
    icon: <FaAmazon />,
    image: service2,
    title: "Amazon Loads",
    desc: "Efficient Amazon freight handling with fast pickups, secure transport, and on-time deliveries.",
  },
  {
    icon: <FaBuilding />,
    image: service3,
    title: "Government Contracts",
    desc: "Professional logistics solutions for government transportation projects and secure freight operations.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7F4FF] to-[#EEE8FF] py-24 sm:py-28"
    >
      {/* Soft Background Effects */}
      <div className="absolute left-[-170px] top-20 h-[340px] w-[340px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-160px] h-[340px] w-[340px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
            Logistics Expertise
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl">
            Premium Freight & Transportation Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5A5370]">
            Delivering reliable logistics, transportation, and freight solutions
            tailored for businesses that expect speed, safety, and consistency.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)]"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 z-20 h-1 w-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

              {/* Image */}
              <div className="relative h-[240px] overflow-hidden sm:h-[260px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/80 via-[#08051A]/25 to-transparent" />

                {/* Icon */}
                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl text-[#5B22C8] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-[#5B22C8] group-hover:text-white sm:h-16 sm:w-16">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-7 sm:p-8">
                <h3 className="text-2xl font-extrabold text-[#08051A]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5A5370]">
                  {service.desc}
                </p>
              </div>

              {/* Soft Glow */}
              <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#F02BCB]/10 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;