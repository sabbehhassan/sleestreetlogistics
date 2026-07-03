import { useEffect, useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "Amazon Partner",
    review:
      "We rely heavily on Amazon load deliveries, and Slee Street Logistics has never let us down. Every shipment is handled with precision.",
  },
  {
    name: "Alessandro Daluz",
    role: "Logistics Client",
    review:
      "Highly recommended logistics agency. Their team understands transportation and freight operations perfectly.",
  },
  {
    name: "Michael Smith",
    role: "Freight Partner",
    review:
      "Dedicated lanes service has improved our delivery timeline significantly. Reliable and professional company.",
  },
  {
    name: "Sarah Wilson",
    role: "Government Contractor",
    review:
      "Government contract logistics were handled securely and professionally. Great communication throughout.",
  },
  {
    name: "Gysin David",
    role: "Business Owner",
    review:
      "Excellent customer support and dependable shipping services. We use them regularly for freight.",
  },
  {
    name: "Emma Johnson",
    role: "Transport Manager",
    review:
      "Fast response time and very organized logistics planning. Highly satisfied with their services.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEE8FF] to-[#F7F4FF] py-24 sm:py-28">
      {/* Soft Background Effects */}
      <div className="absolute left-[-170px] top-16 h-[340px] w-[340px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-160px] h-[340px] w-[340px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
            Client Feedback
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl">
            Trusted By Businesses Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#5A5370]">
            Hear directly from clients who trust Slee Street Logistics for
            dependable freight, transportation, and logistics support.
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-7 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)] sm:p-8"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

              {/* Soft Glow */}
              <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#F02BCB]/10 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/15" />

              {/* Quote Icon */}
              <div className="absolute right-6 top-7 text-5xl text-[#7A2CFF]/10 transition duration-300 group-hover:text-[#F02BCB]/15 sm:text-6xl">
                <FaQuoteLeft />
              </div>

              <div className="relative">
                {/* Stars */}
                <div className="mb-5 flex gap-1 text-[#F02BCB]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                {/* Review */}
                <p className="max-w-xl text-base leading-8 text-[#4E4765]">
                  "{review.review}"
                </p>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-[#7A2CFF]/10" />

                {/* User */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-lg font-extrabold text-white shadow-lg shadow-[#7A2CFF]/20">
                      {review.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate text-lg font-extrabold text-[#08051A]">
                        {review.name}
                      </h4>

                      <p className="truncate text-sm text-[#6B6380]">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-lg text-[#5B22C8] transition duration-300 group-hover:translate-x-1 group-hover:text-[#F02BCB]">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(reviews.length / 2) }).map(
            (_, index) => {
              const isActive = Math.floor(currentIndex / 2) === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index * 2)}
                  aria-label={`Show testimonials ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-[#5B22C8]"
                      : "w-2 bg-[#7A2CFF]/25 hover:bg-[#F02BCB]/60"
                  }`}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;