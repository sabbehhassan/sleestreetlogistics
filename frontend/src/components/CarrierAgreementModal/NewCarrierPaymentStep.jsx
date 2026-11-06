import { useState } from "react";

export default function NewCarrierPaymentStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const [paymentTermsMethod, setPaymentTermsMethod] = useState(
    agreementData.paymentTermsMethod || ""
  );

  const [error, setError] = useState("");

  const paymentOptions = [
    "Zelle Transfer",
    "Chime",
    "Cashapp / BTC",
    "Venmo",
  ];

  const handleNext = () => {
    if (!paymentTermsMethod) {
      setError("Please select a payment option");
      return;
    }

    setError("");

    setAgreementData((prev) => ({
      ...prev,
      paymentTermsMethod,
    }));

    // Payment Terms (Step 5) → Final Submission (Step 6)
    setStep(6);
  };

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] border border-gray-100 bg-white">
        {/* Scroll Area */}
        <div className="px-6 py-8 sm:px-10">
          {/* Back */}
          <button
            onClick={() => setStep(4)}
            className="text-blue-600 font-medium text-sm sm:text-base mb-6 hover:underline"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Payment Terms & Agreement Policy
            </p>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[71%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          {/* Step */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              Step 5: PAYMENT TERMS
            </h2>

            <p className="text-gray-600 mb-6">
              Payment is due prior to service activation.
            </p>

            <h3 className="font-semibold text-lg text-[#02053D] mb-5">
              SELECT PAYMENT OPTION: *
            </h3>

            <div className="space-y-5">
              {paymentOptions.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-4 cursor-pointer border rounded-2xl p-4 transition ${
                    paymentTermsMethod === option
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option}
                    checked={paymentTermsMethod === option}
                    onChange={(e) => {
                      const value = e.target.value;

                      setPaymentTermsMethod(value);

                      setAgreementData((prev) => ({
                        ...prev,
                        paymentTermsMethod: value,
                      }));

                      setError("");
                    }}
                    className="w-5 h-5 accent-emerald-500"
                  />

                  <span className="text-gray-700 text-base">{option}</span>
                </label>
              ))}
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

            <p className="text-gray-500 mt-8 leading-8">
              Payments may be processed via third-party accounts to enable
              same-day service. A digital receipt will be issued upon payment.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              ONBOARDING LANE SETUP REFUND POLICY
            </h2>

            <p className="text-gray-600 leading-8">
              The $425 dedicated lane setup fee is refundable after the client
              completes their first delivery arranged by the company.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              CLIENT RESPONSIBILITIES
            </h2>

            <ul className="list-disc pl-6 text-gray-600 space-y-3 leading-8">
              <li>Provide accurate legal business information</li>
              <li>Maintain active authority</li>
              <li>Professional communication</li>
              <li>No fraud or chargebacks</li>
            </ul>
          </div>

          {/* No Employer-Employee Relationship */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              NO EMPLOYER-EMPLOYEE RELATIONSHIP
            </h2>

            <p className="text-gray-600 leading-8">
              This Agreement does not create an employment relationship. The
              Client is an independent carrier.
            </p>
          </div>

          {/* Liability */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              LIMITATION OF LIABILITY
            </h2>

            <p className="text-gray-600 leading-8">
              The Company is not liable for delays, missed loads, or market
              changes.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={() => setStep(4)}
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-2xl font-semibold transition"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              className="w-full sm:w-1/2 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-semibold shadow-lg transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
