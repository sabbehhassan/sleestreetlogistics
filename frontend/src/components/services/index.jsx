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
    <section className="bg-gradient-to-b from-[#f4f7fb] to-white py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="bg-[#0B7BEA]/10 text-[#0B7BEA] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            Logistics Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C39] mt-6 leading-tight">
            Premium Freight & Transportation Services
          </h2>

          <p className="text-gray-600 text-base leading-8 mt-6">
            Delivering reliable logistics, transportation, and freight solutions
            tailored for businesses worldwide.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-6 left-6 w-[70px] h-[70px] rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0B7BEA] text-2xl shadow-lg group-hover:rotate-6 transition duration-500">
                  {service.icon}
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#0B1C39]">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mt-4">
                  {service.desc}
                </p>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-[#0B7BEA]/20 transition duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;