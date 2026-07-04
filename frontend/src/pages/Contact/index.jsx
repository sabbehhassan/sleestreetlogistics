import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

import contactHero from "../../assets/images/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    if (status) setStatus(null);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus(null);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        formData,
      );

      setStatus({
        type: "success",
        message:
          response.data?.message ||
          "Your message has been sent successfully. Our team will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent right now. Please contact us directly by email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: (
        <>
          contact@sleestreetlogisticsllc.com
          <br />
          michael@sleestreetlogisticsllc.com
        </>
      ),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: "PO BOX 53 KENYON, MN 55946",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Mon - Fri | 24/7 Support",
    },
  ];

  const inputClass =
    "w-full rounded-2xl border border-[#7A2CFF]/10 bg-[#FBFAFF] px-5 py-4 text-sm text-[#08051A] outline-none transition-all duration-300 placeholder:text-[#8B83A3] hover:border-[#7A2CFF]/30 focus:border-[#F02BCB]/50 focus:bg-white focus:shadow-[0_0_0_4px_rgba(240,43,203,0.08)]";

  return (
    <section className="overflow-hidden bg-[#F7F4FF]">
      {/* Hero Section */}
      <div className="relative min-h-[460px] overflow-hidden bg-[#08051A] md:min-h-[540px]">
        <img
          src={contactHero}
          alt="Contact Slee Street Logistics"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08051A]/95 via-[#1B0B3D]/85 to-[#F02BCB]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/85 via-transparent to-black/30" />

        <div className="relative z-10 flex min-h-[460px] items-center justify-center px-5 text-center md:min-h-[540px]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#F02BCB]/40 bg-[#F02BCB]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A7FF] backdrop-blur-sm sm:text-sm">
              Contact Slee Street Logistics
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#E8E2FF] md:text-lg">
              Connect with our logistics specialists for freight inquiries,
              partnerships, and transportation support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Area */}
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-[-170px] top-20 h-[340px] w-[340px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[-160px] h-[340px] w-[340px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left Side */}
          <div>
            <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
              Get In Touch
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08051A] md:text-5xl">
              Let&apos;s Talk Logistics
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

            <p className="mt-7 max-w-lg text-base leading-8 text-[#5A5370]">
              Reach out to our team for freight inquiries, shipment details,
              partnerships, or logistics consultation.
            </p>

            {/* Info Cards */}
            <div className="mt-10 space-y-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-5 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)]"
                >
                  <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[#F02BCB]/10 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/15" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-lg text-white shadow-lg shadow-[#7A2CFF]/20">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-extrabold text-[#08051A]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-[#5A5370]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-6 shadow-[0_22px_60px_rgba(8,5,26,0.12)] sm:p-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#F02BCB]/10 blur-3xl" />

            <div className="relative">
              <h3 className="text-3xl font-extrabold text-[#08051A]">
                Send Message
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6B6380]">
                Fill the form below and our team will contact you shortly.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                {status && (
                  <div
                    className={`rounded-2xl border px-5 py-4 text-sm font-semibold leading-6 ${
                      status.type === "success"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-[#F02BCB]/20 bg-[#F02BCB]/10 text-[#7A174F]"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className={inputClass}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className={inputClass}
                  />
                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-[#F02BCB]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#F02BCB]/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-3 shadow-[0_22px_60px_rgba(8,5,26,0.12)]">
          <iframe
            title="SLEE STREET LOGISTICS Location"
            src="https://www.google.com/maps?q=15+SLEE+ST+KENYON,+MN+55946&output=embed"
            className="h-[360px] w-full rounded-xl border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
