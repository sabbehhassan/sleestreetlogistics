import { useState } from "react";
import { FiClock, FiMail } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import CarrierAgreementModal from "../CarrierAgreementModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAgreement, setOpenAgreement] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* Top Bar */}
        <div className="hidden lg:block bg-[#1a1a4d] border-b border-[#ff1493]/20 text-white">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-sm">

            <div className="flex items-center gap-8 text-purple-100">

              <div className="flex items-center gap-2 hover:text-[#ff1493] transition-all duration-300">
                <FiMail className="text-[#ff1493]" />
                <span>contact@sleestreetlogisticsllc.com</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#ff1493] transition-all duration-300">
                <FiMail className="text-[#ff1493]" />
                <span>michael@sleestreetlogisticsllc.com</span>
              </div>

            </div>

            <div className="flex items-center gap-2 text-purple-100">
              <FiClock className="text-[#ff1493]" />
              <span>Mon - Fri | 8:00 AM - 6:00 PM</span>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <nav className="bg-white/95 backdrop-blur-xl border-b border-[#E9D5FF] shadow-xl shadow-purple-100/40">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex justify-between items-center h-[88px]">

              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Slee Street Logistics LLC"
                  className="h-24 w-auto object-contain"
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-2 bg-[#F7F3FF] p-2 rounded-full border border-[#E9D5FF] shadow-md">

                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#1a1a4d] via-[#1a1a4d] to-[#ff1493] text-white shadow-lg shadow-fuchsia-300/40"
                            : "text-[#1a1a4d] hover:bg-[#F3F0FF] hover:text-[#1a1a4d]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}

              </ul>

              {/* Desktop Button */}
              <div className="hidden lg:block">
                <button
                  onClick={() => setOpenAgreement(true)}
                  className="bg-gradient-to-r from-[#1a1a4d] via-[#1a1a4d] to-[#ff1493] hover:scale-105 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_10px_35px_rgba(217,70,239,.35)]"
                >
                  Carrier Setup | Agreement
                </button>
              </div>

              {/* Mobile Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-11 h-11 rounded-xl bg-[#F7F3FF] flex items-center justify-center shadow-md"
                >
                  {menuOpen ? (
                    <HiX className="text-3xl text-[#1a1a4d]" />
                  ) : (
                    <HiOutlineMenuAlt3 className="text-3xl text-[#1a1a4d]" />
                  )}
                </button>
              </div>

            </div>

          </div>
                    {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-t border-[#E9D5FF] shadow-2xl animate-fadeDown">
              <div className="px-6 py-6 space-y-4">

                {navLinks.map((item, index) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[#1a1a4d] via-[#1a1a4d] to-[#ff1493] text-white shadow-lg"
                          : "bg-[#F7F3FF] text-[#1a1a4d] hover:bg-[#F3F0FF] hover:text-[#1a1a4d]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    setOpenAgreement(true);
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#1a1a4d] via-[#1a1a4d] to-[#ff1493] text-white py-3 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Carrier Setup | Agreement
                </button>

              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Agreement Modal */}
      <CarrierAgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Navbar;
