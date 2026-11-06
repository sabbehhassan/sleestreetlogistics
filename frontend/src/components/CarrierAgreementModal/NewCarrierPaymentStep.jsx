import { useState } from "react";
import {
  agreementServices,
  getAgreementServiceValue,
  ONBOARDING_LANE_SETUP_SERVICE_VALUE,
} from "./agreementServices";

export default function NewCarrierPaymentStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const [error, setError] = useState("");
  const [servicesError, setServicesError] = useState("");
  const isNewCarrier = agreementData.carrierType === "new";
  const selectedServices = agreementData.selectedServices || [];
  const hasAdditionalServices = selectedServices.some(
    (service) => service !== ONBOARDING_LANE_SETUP_SERVICE_VALUE,
  );
  const showRemainingContent = isNewCarrier || hasAdditionalServices;
  const paymentTermsMethod = agreementData.paymentTermsMethod || "";
  const paymentOptions = [
    "Zelle Transfer",
    "Chime",
    "Cashapp / BTC",
    "Venmo",
  ];

  const toggleService = (serviceValue) => {
    setAgreementData((prev) => {
      const currentServices = prev.selectedServices || [];
      const updatedServices = currentServices.includes(serviceValue)
        ? currentServices.filter((service) => service !== serviceValue)
        : [...currentServices, serviceValue];

      if (updatedServices.length > 0) setServicesError("");

      return { ...prev, selectedServices: updatedServices };
    });
  };

  const handleNext = () => {
    if (!selectedServices.length) {
      setServicesError("Please select at least one service");
      return;
    }

    if (showRemainingContent && !paymentTermsMethod) {
      setError("Please select a payment option");
      return;
    }

    setError("");

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
              BROKER / CARRIER AGREEMENT
            </h1>

            {showRemainingContent && (
              <p className="text-gray-500 text-sm sm:text-base mt-2">
                Payment Terms & Agreement Policy
              </p>
            )}
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[71%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#02053D] mb-4">
              Services & Fees
            </h2>

            <div className="space-y-4">
              {agreementServices.map((service) => {
                const serviceValue = getAgreementServiceValue(service);
                const isSelected = selectedServices.includes(serviceValue);

                return (
                  <label
                    key={service.name}
                    className={`flex items-start gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "border-[#1a1a4d] bg-[#EEF3E8] shadow-sm"
                        : "border-[#dce5df] hover:border-[#1a1a4d]/40 bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleService(serviceValue)}
                      className="w-5 h-5 mt-1 accent-[#1a1a4d]"
                    />

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-semibold text-[#1a1a4d]">
                          {service.name}
                        </span>
                        {(isNewCarrier ||
                          service.name !== "ONBOARDING LANE SETUP FEE") && (
                          <span className="font-bold text-[#1a1a4d] text-lg">
                            ${service.fee}
                          </span>
                        )}
                      </div>
                      {service.description && (
                        <p className="text-sm text-gray-500 mt-1">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>

            {servicesError && (
              <p className="text-red-500 text-sm mt-4" role="alert">
                {servicesError}
              </p>
            )}
          </section>

          {showRemainingContent && (
            <>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#02053D] mb-4">
                  Step 5: PAYMENT TERMS
                </h2>

                <p className="text-gray-600 mb-6">
                  Select your preferred payment method for the Refundable
                  Security Deposit (you are not being charged now):
                </p>

                <h3 className="font-semibold text-lg text-[#02053D] mb-5">
                  SELECT PAYMENT OPTION: *
                </h3>

                <div className="space-y-5">
                  {paymentOptions.map((option) => (
                    <label
                      key={option}
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

                {paymentTermsMethod && (
                  <p className="text-gray-500 mt-6 leading-8">
                    Shipper&apos;s use fast and reliable methods such as Zelle,
                    Venmo, or Chime because it allows them to instantly verify
                    your refundable deposit and process your BOL, Pickup
                    Number, Scheduling, and documents without delay. If slower
                    methods are used like wire or other transfers, it can take
                    5-7 business days to verify, may involve additional fees or
                    taxes, and can delay your load assignment. By selecting a
                    quick option, you help ensure your load is scheduled
                    smoothly and your deposit is refunded promptly after your
                    first delivery.
                  </p>
                )}

                {error && (
                  <p className="text-red-500 text-sm mt-4" role="alert">
                    {error}
                  </p>
                )}
              </div>

              {/* Refund Policy */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#02053D] mb-4">
                  ONBOARDING LANE SETUP REFUND POLICY
                </h2>
                <p className="text-gray-600 leading-8">
                  The $425 dedicated lane setup fee is refundable after the
                  client completes their first delivery arranged by the
                  company.
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
                  This Agreement does not create an employment relationship.
                  The Client is an independent carrier.
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
            </>
          )}

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
