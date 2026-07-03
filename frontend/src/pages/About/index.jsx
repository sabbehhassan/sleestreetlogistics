import {
  FaStar,
  FaHandshake,
  FaShieldAlt,
  FaArrowRight,
  FaTruckMoving,
  FaGlobe,
  FaWarehouse,
  FaDollarSign,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import heroBg from "../../assets/images/about.png";
import storyImg from "../../assets/images/about-story.jpg";
import missionImg from "../../assets/images/about-mission.jpg";

const About = () => {
  const stats = [
    { icon: <FaTruckMoving />, number: "15K+", label: "Monthly Shipments" },
    { icon: <FaGlobe />, number: "120+", label: "Routes Covered" },
    { icon: <FaWarehouse />, number: "98%", label: "Client Satisfaction" },
  ];

  const features = [
    {
      icon: <FaDollarSign />,
      title: "Competitive Pricing & Flexible Solutions",
      desc: "We provide competitive rates and flexible logistics solutions tailored to businesses of all sizes.",
    },
    {
      icon: <FaLock />,
      title: "Advanced Security & Safety",
      desc: "We ensure your shipments remain secure and compliant at every stage of transportation.",
    },
  ];

  const values = [
    { icon: <FaStar />, title: "Excellence", desc: "Premium service quality" },
    { icon: <FaHandshake />, title: "Integrity", desc: "Transparency and trust" },
    { icon: <FaShieldAlt />, title: "Reliability", desc: "Safe, on-time delivery" },
  ];

  return (
    <section className="overflow-hidden bg-[#F7F4FF]">
      {/* Hero */}
      <div className="relative min-h-[520px] overflow-hidden bg-[#08051A] md:min-h-[680px]">
        <img
          src={heroBg}
          alt="Slee Street Logistics about"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#08051A]/95 via-[#1B0B3D]/85 to-[#F02BCB]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/85 via-transparent to-black/30" />

        <div className="relative z-10 flex min-h-[520px] items-center md:min-h-[680px]">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#F02BCB]/40 bg-[#F02BCB]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A7FF] backdrop-blur-sm sm:text-sm">
                About Our Company
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                Logistics Solutions Built For
                <span className="block bg-gradient-to-r from-[#9B5CFF] via-[#F02BCB] to-white bg-clip-text text-transparent">
                  Modern Business
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#E8E2FF] sm:text-lg">
                We provide dependable logistics, freight, warehousing, and
                transportation services designed for speed, safety, and long-term
                business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#7A2CFF]/10 bg-white p-7 text-center shadow-[0_18px_45px_rgba(8,5,26,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-2xl text-white shadow-lg shadow-[#7A2CFF]/20">
                {item.icon}
              </div>

              <h3 className="mt-4 text-3xl font-extrabold text-[#08051A]">
                {item.number}
              </h3>

              <p className="mt-1 text-sm text-[#5A5370]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_22px_60px_rgba(8,5,26,0.16)]">
          <img
            src={storyImg}
            alt="Our logistics story"
            className="h-[360px] w-full object-cover sm:h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/45 to-transparent" />
        </div>

        <div>
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#D92BC8]">
            Our Story
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl">
            Building Trust Through Logistics Excellence
          </h2>

          <p className="mt-6 leading-8 text-[#5A5370]">
            Slee Street Logistics connects businesses with dependable freight
            carriers and supply chain solutions that keep operations moving.
          </p>

          <p className="mt-4 leading-8 text-[#5A5370]">
            We focus on secure transportation, optimized shipping, and scalable
            logistics operations that help businesses grow with confidence.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-[#08051A] sm:text-4xl md:text-5xl">
            Why Choose Our Logistics Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-8 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4FF] text-2xl text-[#5B22C8] transition-all duration-300 group-hover:bg-[#5B22C8] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-extrabold text-[#08051A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#5A5370]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#D92BC8]">
            Mission & Vision
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl">
            Delivering Smarter Logistics Worldwide
          </h2>

          <p className="mt-6 leading-8 text-[#5A5370]">
            Our mission is to simplify logistics while maintaining high-quality
            service, transportation efficiency, and dependable communication.
          </p>

          <div className="mt-8 space-y-4">
            {values.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-[#7A2CFF]/10 bg-white p-5 shadow-[0_12px_30px_rgba(8,5,26,0.07)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-white">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-extrabold text-[#08051A]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[#5A5370]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-[0_22px_60px_rgba(8,5,26,0.16)]">
          <img
            src={missionImg}
            alt="Our logistics mission"
            className="h-[360px] w-full object-cover sm:h-[450px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08051A]/45 to-transparent" />
        </div>
      </div>

      {/* Commitment */}
      <div className="relative overflow-hidden bg-[#EEE8FF] py-24">
        <div className="absolute left-[-160px] top-10 h-[320px] w-[320px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
        <div className="absolute right-[-160px] bottom-0 h-[320px] w-[320px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#08051A] sm:text-4xl md:text-5xl">
            Our Commitment to Quality
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#5A5370]">
            We are dedicated to delivering top-quality freight services with
            careful handling, clear communication, and dependable logistics
            support.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-[#5A5370]">
            Our team works closely with every client to provide efficient and
            cost-effective transportation solutions.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-[#08051A] py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B22C8]/25 via-transparent to-[#F02BCB]/25" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Ready To Optimize Your Logistics?
          </h2>

          <p className="mt-6 text-[#D9D2F0]">
            Let&apos;s discuss your transportation needs today.
          </p>

          <Link to="/contact">
            <button className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] px-8 py-4 font-extrabold text-white shadow-xl shadow-[#F02BCB]/25 transition duration-300 hover:-translate-y-1">
              Contact Us <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;