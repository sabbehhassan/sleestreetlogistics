import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function InsuranceApplicationAssistance({
  setOpenAgreement,
}) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0B7BEA] to-[#001F54] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold">
            Insurance Application Assistance
          </h2>

          <p className="mt-5 text-gray-200 max-w-2xl mx-auto">
            Fast-track your trucking insurance with expert guidance,
            full compliance, and zero hassle application support.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - FEATURES */}
          <div className="space-y-6">

            <div className="flex gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">

              <ShieldCheck className="text-white" size={35} />

              <div>
                <h3 className="font-semibold text-lg">
                  Coverage Selection
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  Get help choosing liability, cargo, and physical damage coverage.
                </p>
              </div>

            </div>

            <div className="flex gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">

              <FileText className="text-white" size={35} />

              <div>
                <h3 className="font-semibold text-lg">
                  Paperwork Handling
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  We manage documents and filing so you avoid costly mistakes.
                </p>
              </div>

            </div>

            <div className="flex gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">

              <Clock className="text-white" size={35} />

              <div>
                <h3 className="font-semibold text-lg">
                  Quick Approval
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  Speed up your approval with our streamlined process.
                </p>
              </div>

            </div>

            <div className="flex gap-5 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">

              <CheckCircle className="text-white" size={35} />

              <div>
                <h3 className="font-semibold text-lg">
                  FMCSA Compliance
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  Stay compliant and ready to operate without delays.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - TIMELINE */}
          <div className="relative">

            <div className="border-l-2 border-white/30 pl-8 space-y-10">

              <div>
                <h4 className="font-semibold text-lg">
                  Step 1: Consultation
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  We understand your trucking needs and insurance requirements.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Step 2: Documentation
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Submit your business details and required documents.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Step 3: Application
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  We file and manage your insurance application.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Step 4: Approval
                </h4>

                <p className="text-gray-300 text-sm mt-1">
                  Get your certificate and start operating immediately.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 text-center">

          <button
            onClick={() => setOpenAgreement(true)}
            className="bg-white text-[#0B7BEA] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition duration-300 shadow-xl"
          >
            Apply For Insurance Assistance
          </button>

        </div>

      </div>
    </section>
  );
}