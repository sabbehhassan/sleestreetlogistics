import { ShieldCheck, FileText, Clock, Truck } from "lucide-react";

export default function TwicCardAssistance({ setOpenAgreement }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            TWIC Card Assistance
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get professional assistance in obtaining your TWIC card and unlock
            access to high-paying port loads and secure facilities.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <ShieldCheck className="text-blue-600 mb-4" size={40} />

            <h3 className="text-xl font-semibold mb-2">
              Secure Port Access
            </h3>

            <p className="text-gray-600">
              Gain authorized access to ports and restricted maritime facilities
              without delays.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FileText className="text-blue-600 mb-4" size={40} />

            <h3 className="text-xl font-semibold mb-2">
              Application Assistance
            </h3>

            <p className="text-gray-600">
              We guide you through the entire TWIC application process including
              documents, enrollment, and verification.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Clock className="text-blue-600 mb-4" size={40} />

            <h3 className="text-xl font-semibold mb-2">
              Fast Processing Guidance
            </h3>

            <p className="text-gray-600">
              Avoid delays with expert help and get your TWIC card approved
              quickly and efficiently.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Truck className="text-blue-600 mb-4" size={40} />

            <h3 className="text-xl font-semibold mb-2">
              More Load Opportunities
            </h3>

            <p className="text-gray-600">
              Access better-paying port freight and increase your earning
              potential as a driver.
            </p>
          </div>

        </div>

        {/* Process Section */}
        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center text-black mb-10">
            How It Works
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h4 className="font-semibold text-lg">1. Apply</h4>

              <p className="text-gray-600 text-sm mt-2">
                Submit your application online or at an enrollment center.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2. Verification</h4>

              <p className="text-gray-600 text-sm mt-2">
                Provide documents, fingerprints, and background check.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">3. Approval</h4>

              <p className="text-gray-600 text-sm mt-2">
                TSA reviews your application and approves your credentials.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">4. Get Your Card</h4>

              <p className="text-gray-600 text-sm mt-2">
                Receive your TWIC card and start accessing secure facilities.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-center text-white">

          <h3 className="text-2xl font-semibold mb-4">
            Ready to Get Your TWIC Card?
          </h3>

          <p className="mb-6">
            Let our team help you complete the process quickly and start
            accessing premium freight opportunities.
          </p>

          <button
            onClick={() => setOpenAgreement(true)}
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Apply For TWIC Assistance
          </button>

        </div>

      </div>
    </section>
  );
}