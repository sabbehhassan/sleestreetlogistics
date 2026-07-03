import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "International Freight",
    "Amazon Loads",
    "Dedicated Loads",
    "Truck Dispatching",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08051A] text-white">
      {/* Top Accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F02BCB] to-transparent" />

      {/* Soft Background Effects */}
      <div className="absolute left-[-180px] top-10 h-[360px] w-[360px] rounded-full bg-[#7A2CFF]/15 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-160px] h-[360px] w-[360px] rounded-full bg-[#F02BCB]/12 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-7 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.5] px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
              <img
                src={logo}
                alt="Slee Street Logistics"
                className="w-44 object-contain"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#D9D2F0]">
              Slee Street Logistics delivers dependable freight and
              transportation services designed to keep shipments moving safely,
              efficiently, and on schedule.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="relative mb-7 inline-block text-lg font-extrabold text-white">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] md:left-0 md:translate-x-0" />
            </h3>

            <ul className="space-y-4 text-sm text-[#D9D2F0]">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-center gap-3 transition duration-300 hover:text-[#F4A7FF] md:justify-start"
                  >
                    <FaArrowRight className="text-[10px] text-[#F02BCB] transition duration-300 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="relative mb-7 inline-block text-lg font-extrabold text-white">
              Services
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] md:left-0 md:translate-x-0" />
            </h3>

            <ul className="space-y-4 text-sm text-[#D9D2F0]">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="transition duration-300 hover:text-[#F4A7FF]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="relative mb-7 inline-block text-lg font-extrabold text-white">
              Contact Info
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] md:left-0 md:translate-x-0" />
            </h3>

            <div className="space-y-5">
              <div className="flex items-start justify-center gap-4 text-center md:justify-start md:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#7A2CFF]/20 bg-white/5 text-[#F02BCB]">
                  <FaMapMarkerAlt />
                </div>

                <p className="max-w-xs text-sm leading-7 text-[#D9D2F0]">
                  54 1/2 Street South Fargo, ND 58103
                </p>
              </div>

              <div className="flex items-start justify-center gap-4 text-center md:justify-start md:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#7A2CFF]/20 bg-white/5 text-[#F02BCB]">
                  <FaEnvelope />
                </div>

                <p className="max-w-xs break-all text-sm leading-7 text-[#D9D2F0]">
                  info@sleestreetlogistics.com
                  <br />
                  gysin@sleestreetlogistics.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center text-sm text-[#BDB4D8] md:flex-row md:text-left">
          <p>© 2026 SLEE STREET LOGISTICS. All Rights Reserved.</p>

          <p className="font-semibold text-[#F4A7FF]">
            Reliable Freight. Secure Delivery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;