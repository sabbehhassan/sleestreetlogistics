import {
  FileText,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function FactoringRegistration({
  setOpenAgreement,
}) {
  const steps = [
    {
      step: "1",
      title: "Submit Application",
      desc: "Provide your business details and required documents to begin the factoring process.",
    },
    {
      step: "2",
      title: "Verification",
      desc: "Your company details and documents are reviewed and verified for approval.",
    },
    {
      step: "3",
      title: "Approval",
      desc: "Once approved, you are ready to start factoring your invoices.",
    },
    {
      step: "4",
      title: "Get Paid Faster",
      desc: "Receive quick payments on your loads and improve your cash flow.",
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle size={20} />,
      text: "Get paid within 24 hours instead of waiting weeks",
    },
    {
      icon: <Truck size={20} />,
      text: "Keep your trucks moving without cash flow delays",
    },
    {
      icon: <FileText size={20} />,
      text: "Simple documentation and easy onboarding process",
    },
    {
      icon: <CheckCircle size={20} />,
      text: "Quick, hassle-free setup with minimal paperwork",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F4FF] to-[#EEE8FF] py-24 sm:py-28">
      {/* Soft Background Effects */}
      <div className="absolute left-[-170px] top-16 h-[340px] w-[340px] rounded-full bg-[#7A2CFF]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-160px] h-[340px] w-[340px] rounded-full bg-[#F02BCB]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="inline-flex rounded-full border border-[#7A2CFF]/15 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#5B22C8] shadow-sm sm:text-sm">
            Financial Support
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#08051A] sm:text-4xl md:text-5xl">
            Factoring Registration
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#5B22C8] to-[#F02BCB]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#5A5370]">
            Improve your cash flow and get paid faster by registering with our
            trusted factoring partners. We simplify onboarding so you can focus
            on growing your trucking business.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Steps */}
          <div className="space-y-5">
            {steps.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-6 shadow-[0_16px_40px_rgba(8,5,26,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/25 hover:shadow-[0_22px_55px_rgba(122,44,255,0.14)] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B22C8] to-[#F02BCB]" />
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F02BCB]/10 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/15" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-lg font-extrabold text-white shadow-lg shadow-[#7A2CFF]/20 transition duration-300 group-hover:rotate-3">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#08051A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5A5370]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Panel */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-[#08051A] p-8 text-white shadow-[0_22px_60px_rgba(8,5,26,0.22)] sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B22C8]/35 via-transparent to-[#F02BCB]/25" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F02BCB]/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-[#F02BCB]/35 bg-[#F02BCB]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A7FF]">
                  Fast Payments
                </span>

                <h3 className="mt-5 text-3xl font-extrabold leading-tight">
                  Why Choose Factoring?
                </h3>

                <p className="mt-5 leading-8 text-[#D9D2F0]">
                  Factoring helps carriers maintain steady cash flow without
                  waiting weeks for payments. It&apos;s one of the fastest ways
                  to scale trucking operations efficiently.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#7A2CFF]/10 bg-white p-7 shadow-[0_16px_40px_rgba(8,5,26,0.08)] sm:p-8">
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F02BCB]/10 blur-2xl" />

              <div className="relative space-y-5">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B22C8] to-[#F02BCB] text-white shadow-md shadow-[#7A2CFF]/15">
                      {item.icon}
                    </div>

                    <p className="text-sm leading-7 text-[#5A5370]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center sm:mt-20">
          <button
            onClick={() => setOpenAgreement(true)}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-[#F02BCB]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#F02BCB]/40 sm:px-9"
          >
            Apply For Factoring Registration
          </button>
        </div>
      </div>
    </section>
  );
}