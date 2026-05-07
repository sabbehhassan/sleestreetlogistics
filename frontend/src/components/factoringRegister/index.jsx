import {
  FileText,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function FactoringRegistration({
  setOpenAgreement,
}) {
  return (
    <section className="bg-[#f9fafb] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Factoring Registration
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Improve your cash flow and get paid faster by registering with our
            factoring partners. We simplify the onboarding process so you can
            focus on growing your trucking business.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT - STEPS FLOW */}
          <div className="space-y-6">

            <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <div className="bg-[#0B7BEA] text-white w-12 h-12 flex items-center justify-center rounded-xl">
                1
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Submit Application
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Provide your business details and required documents to start
                  the factoring process.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <div className="bg-[#0B7BEA] text-white w-12 h-12 flex items-center justify-center rounded-xl">
                2
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Verification
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Your company details and documents are verified for approval.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <div className="bg-[#0B7BEA] text-white w-12 h-12 flex items-center justify-center rounded-xl">
                3
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Approval
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Once approved, you are ready to start factoring your invoices.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

              <div className="bg-[#0B7BEA] text-white w-12 h-12 flex items-center justify-center rounded-xl">
                4
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Get Paid Faster
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Receive quick payments on your loads and improve your cash flow.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT - BENEFITS PANEL */}
          <div className="space-y-8">

            {/* Highlight Box */}
            <div className="bg-[#0B7BEA] text-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-semibold">
                Why Choose Factoring?
              </h3>

              <p className="text-sm mt-4 text-gray-200">
                Factoring helps carriers maintain steady cash flow without waiting
                weeks for payments. It's the fastest way to scale your operations.
              </p>

            </div>

            {/* Benefits List */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">

              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#0B7BEA] mt-1" />

                <p className="text-gray-700 text-sm">
                  Get paid within 24 hours instead of waiting weeks
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Truck className="text-[#0B7BEA] mt-1" />

                <p className="text-gray-700 text-sm">
                  Keep your trucks moving without cash flow delays
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FileText className="text-[#0B7BEA] mt-1" />

                <p className="text-gray-700 text-sm">
                  Simple documentation and easy onboarding process
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#0B7BEA] mt-1" />

                <p className="text-gray-700 text-sm">
                  No complex procedures — quick and hassle-free setup
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 text-center">

          <button
            onClick={() => setOpenAgreement(true)}
            className="bg-[#0B7BEA] hover:bg-[#0867c5] text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg"
          >
            Apply For Factoring Registration
          </button>

        </div>

      </div>
    </section>
  );
}