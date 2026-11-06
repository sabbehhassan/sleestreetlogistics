import { useState } from "react";

export default function FinalSubmissionStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const today = new Date().toISOString().split("T")[0];

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!agreementData.selectedServices?.length) {
      newErrors.selectedServices = "Please select at least one service";
    }

    if (!agreementData.signature?.trim()) {
      newErrors.signature = "Signature is required";
    }

    if (!agreementData.printName?.trim()) {
      newErrors.printName = "Print Name is required";
    }

    if (!agreementData.email?.trim()) {
      newErrors.email = "Email is required";
    }

    if (!agreementData.paymentMethod) {
      newErrors.paymentMethod = "Select payment method";
    }

    if (agreementData.paymentMethod !== "Cash On Delivery") {
      if (!agreementData.bankName?.trim()) {
        newErrors.bankName = "Bank Name required";
      }

      if (!agreementData.accountNumber?.trim()) {
        newErrors.accountNumber = "Account Number required";
      }

      if (!agreementData.routingNumber?.trim()) {
        newErrors.routingNumber = "Routing Number required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    const finalData = {
      ...agreementData,
      date: today,
    };

    console.log(finalData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/agreement/submit-agreement`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setStep(7);
      } else {
        alert(data.message || "Agreement submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Agreement submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full border border-[#dce5df] rounded-2xl px-5 py-4 bg-[#fafbf9] focus:border-[#1a1a4d] focus:ring-4 focus:ring-[#1a1a4d]/10 outline-none transition duration-300";

  return (
    <div className="w-full bg-gradient-to-br from-[#F8F5EE] to-[#EEF3E8] px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[36px] border border-[#ff1493]/10 bg-white">
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#1a1a4d]/10 rounded-full blur-3xl"></div>

        {/* Accent Line */}
        <div className="h-1.5 bg-gradient-to-r from-[#1a1a4d] via-[#ff1493] to-[#1a1a4d]"></div>

        <div className="relative px-6 py-8 sm:px-10">
          {/* Back Button */}
          <button
            onClick={() => setStep(5)}
            className="text-[#1a1a4d] text-sm font-semibold mb-8 hover:text-[#ff1493] transition duration-300"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#1a1a4d]/10 text-[#1a1a4d] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-[#1a1a4d]/10 mb-5">
              Final Agreement
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a4d] uppercase leading-tight">
              BROKER / CARRIER AGREEMENT
            </h1>

            <p className="text-[#6d7a72] mt-4 text-base">
              Step 6: Final Submission
            </p>
          </div>

          {/* Progress */}
          <div className="w-full h-3 bg-[#e6ece7] rounded-full mb-12 overflow-hidden">
            <div className="w-[86%] h-full bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] rounded-full"></div>
          </div>

          {/* Signature and Information */}
          <h2 className="text-2xl font-bold text-[#1a1a4d] mb-6">
            FINAL INFORMATION
          </h2>

          <div className="space-y-6">
            {/* Signature */}
            <div>
              <label className="block mb-3 font-semibold text-[#1a1a4d]">
                SIGNATURE *
              </label>

              <input
                type="text"
                placeholder="Signature"
                value={agreementData.signature || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    signature: e.target.value,
                  })
                }
                className={inputClass}
              />

              {errors.signature && (
                <p className="text-red-500 text-sm mt-1">{errors.signature}</p>
              )}
            </div>

            {/* Print Name */}
            <div>
              <label className="block mb-3 font-semibold text-[#1a1a4d]">
                PRINTER NAME *
              </label>

              <input
                type="text"
                placeholder="Print Name"
                value={agreementData.printName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    printName: e.target.value,
                  })
                }
                className={inputClass}
              />

              {errors.printName && (
                <p className="text-red-500 text-sm mt-1">{errors.printName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-3 font-semibold text-[#1a1a4d]">
                EMAIL *
              </label>

              <input
                type="email"
                placeholder="Email"
                value={agreementData.email || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    email: e.target.value,
                  })
                }
                className={inputClass}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <label className="block mb-4 font-semibold text-[#1a1a4d]">
                HOW DO YOU GET PAID *
              </label>

              <div className="space-y-4">
                {[
                  "Factoring",
                  "ACH Direct Deposit Method",
                  "Cash On Delivery",
                ].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      agreementData.paymentMethod === method
                        ? "border-[#1a1a4d] bg-[#EEF3E8]"
                        : "border-[#dce5df] hover:border-[#1a1a4d]/40"
                    }`}
                  >
                    <input
                      type="radio"
                      checked={agreementData.paymentMethod === method}
                      onChange={() =>
                        setAgreementData({
                          ...agreementData,
                          paymentMethod: method,
                        })
                      }
                      className="accent-[#1a1a4d] w-5 h-5"
                    />

                    <span className="text-[#1a1a4d] font-medium">{method}</span>
                  </label>
                ))}
              </div>

              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.paymentMethod}
                </p>
              )}
            </div>

            <section className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a4d]">
                Entire Contract
              </h3>
              <p className="text-gray-600 leading-8 text-sm sm:text-base">
                This CARRIER SETUP / AGREEMENT contains all the terms and
                conditions that fully represent the mutual understanding and
                CARRIER SETUP / AGREEMENT between the parties. It supersedes all
                prior CARRIER SETUP / AGREEMENT, whether verbal or written, and
                no other understandings - express or implied - exist between
                the parties, except as expressly stated in this document.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a4d]">
                Notices
              </h3>
              <p className="text-gray-600 leading-8 text-sm sm:text-base">
                If the Carrier intends to terminate the contract or change
                jobs, the Carrier must provide at least 15 days&apos; prior
                notice before ending the contract.
              </p>
            </section>

            {/* Bank Information */}
            {agreementData.paymentMethod !== "Cash On Delivery" && (
              <div className="space-y-6">
                {[
                  {
                    label: "BANK NAME",
                    key: "bankName",
                    placeholder: "Bank Name",
                  },
                  {
                    label: "ACCOUNT NUMBER",
                    key: "accountNumber",
                    placeholder: "Account Number",
                  },
                  {
                    label: "ROUTING NUMBER",
                    key: "routingNumber",
                    placeholder: "Routing Number",
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block mb-3 font-semibold text-[#1a1a4d]">
                      {field.label} *
                    </label>

                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={agreementData[field.key] || ""}
                      onChange={(e) =>
                        setAgreementData({
                          ...agreementData,
                          [field.key]: e.target.value,
                        })
                      }
                      className={inputClass}
                    />

                    {errors[field.key] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            {/* Previous */}
            <button
              onClick={() => setStep(5)}
              className="w-full sm:w-1/2 bg-[#EEF3E8] hover:bg-[#e3ecdc] text-[#1a1a4d] font-semibold py-4 rounded-2xl transition duration-300 border border-[#ff1493]/10"
            >
              ← Previous
            </button>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full sm:w-1/2 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                isLoading
                  ? "bg-[#7ea789] cursor-not-allowed text-white"
                  : "bg-gradient-to-r from-[#1a1a4d] to-[#1a1a4d] hover:scale-[1.02] text-white"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                "Submit Agreement"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
