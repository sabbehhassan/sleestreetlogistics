import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function InsuranceApplicationAssistance() {
  const features = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Coverage Selection",
      desc: "Get help choosing liability, cargo, and physical damage coverage.",
    },
    {
      icon: <FileText size={28} />,
      title: "Paperwork Handling",
      desc: "We manage documents and filing so you avoid costly mistakes.",
    },
    {
      icon: <Clock size={28} />,
      title: "Quick Approval",
      desc: "Speed up your approval with our streamlined process.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "FMCSA Compliance",
      desc: "Stay compliant and ready to operate without delays.",
    },
  ];

  const steps = [
    {
      step: "Step 1",
      title: "Consultation",
      desc: "We understand your trucking needs and insurance requirements.",
    },
    {
      step: "Step 2",
      title: "Documentation",
      desc: "Submit your business details and required documents.",
    },
    {
      step: "Step 3",
      title: "Application",
      desc: "We file and manage your insurance application.",
    },
    {
      step: "Step 4",
      title: "Approval",
      desc: "Get your certificate and start operating immediately.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#08051A] py-24 text-white sm:py-28">
      {/* Background Effects */}
      <div className="absolute left-[-180px] top-[-120px] h-[460px] w-[460px] rounded-full bg-[#7A2CFF]/20 blur-[130px]" />
      <div className="absolute bottom-[-140px] right-[-160px] h-[460px] w-[460px] rounded-full bg-[#F02BCB]/16 blur-[130px]" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="inline-flex rounded-full border border-[#F02BCB]/35 bg-[#F02BCB]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F4A7FF] shadow-sm sm:text-sm">
            Insurance Support
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Insurance Application Assistance
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#7A2CFF] to-[#F02BCB]" />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D9D2F0]">
            Fast-track your trucking insurance with expert guidance, full
            compliance, and hassle-free application support.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Features */}
          <div className="space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F02BCB]/30 hover:bg-white/[0.1]"
              >
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F02BCB]/12 blur-2xl transition duration-300 group-hover:bg-[#7A2CFF]/18" />

                <div className="relative flex gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A2CFF] to-[#F02BCB] text-white shadow-xl shadow-[#F02BCB]/20 transition duration-300 group-hover:rotate-3">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#D9D2F0]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-[#F02BCB] via-white/20 to-transparent" />

            <div className="space-y-8">
              {steps.map((item, index) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#08051A] bg-gradient-to-br from-[#7A2CFF] to-[#F02BCB] text-xs font-extrabold text-white shadow-lg shadow-[#F02BCB]/20">
                    {index + 1}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-300 hover:border-[#F02BCB]/30 hover:bg-white/[0.1]">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4A7FF]">
                      {item.step}
                    </span>

                    <h4 className="mt-2 text-xl font-extrabold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#D9D2F0]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}