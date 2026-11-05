import { useState } from "react";

export default function CarrierInformationStep({
  setStep,
  agreementData,
  setAgreementData,
}) {
  const [errors, setErrors] = useState({});

  const handleCarrierTypeChange = (value) => {
    setAgreementData({
      ...agreementData,
      carrierType: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!agreementData.carrierName?.trim()) {
      newErrors.carrierName = "Carrier Name is required";
    }

    if (!agreementData.mcDot?.trim()) {
      newErrors.mcDot = "MC / DOT is required";
    }

    if (!agreementData.phone?.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!agreementData.carrierType) {
      newErrors.carrierType = "Carrier Type is required";
    }

    if (!agreementData.driverName?.trim()) {
      newErrors.driverName = "Driver Name is required";
    }

    if (!agreementData.driverPhone?.trim()) {
      newErrors.driverPhone = "Driver Phone is required";
    }

    if (!agreementData.licenseNumber?.trim()) {
      newErrors.licenseNumber = "License Number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const inputClass =
    "w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const labelClass = "block font-semibold text-[#02053D] mb-2";

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[30px] border border-gray-100 bg-white">
        <div className="px-6 py-8 sm:px-10">
          {/* Back Button */}
          <button
            onClick={() => setStep(2)}
            className="text-blue-600 text-sm sm:text-base font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Step 3: Carrier Information & Services Setup
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[43%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          {/* Carrier Information */}
          <div className="space-y-5">
            {/* Carrier Name */}
            <div>
              <label className={labelClass}>Carrier Full Name *</label>

              <input
                type="text"
                value={agreementData.carrierName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    carrierName: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.carrierName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.carrierName}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className={labelClass}>Company Name</label>

              <input
                type="text"
                value={agreementData.companyName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    companyName: e.target.value,
                  })
                }
                className={inputClass}
              />
            </div>

            {/* MC DOT */}
            <div>
              <label className={labelClass}>MC Number / DOT Number *</label>

              <input
                type="text"
                value={agreementData.mcDot || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    mcDot: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.mcDot && (
                <p className="text-red-500 text-sm mt-1">{errors.mcDot}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number *</label>

              <input
                type="text"
                value={agreementData.phone || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    phone: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Driver Name */}
            <div>
              <label className={labelClass}>Driver Name *</label>

              <input
                type="text"
                value={agreementData.driverName || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    driverName: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.driverName && (
                <p className="text-red-500 text-sm mt-1">{errors.driverName}</p>
              )}
            </div>

            {/* Driver Phone */}
            <div>
              <label className={labelClass}>Driver Phone Number *</label>

              <input
                type="text"
                value={agreementData.driverPhone || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    driverPhone: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.driverPhone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.driverPhone}
                </p>
              )}
            </div>

            {/* License Number */}
            <div>
              <label className={labelClass}>License Number *</label>

              <input
                type="text"
                value={agreementData.licenseNumber || ""}
                onChange={(e) =>
                  setAgreementData({
                    ...agreementData,
                    licenseNumber: e.target.value,
                  })
                }
                className={inputClass}
              />
              {errors.licenseNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.licenseNumber}
                </p>
              )}
            </div>

            {/* Carrier Type */}
            <div>
              <label className={labelClass}>Carrier Type *</label>

              <select
                value={agreementData.carrierType || ""}
                onChange={(e) => handleCarrierTypeChange(e.target.value)}
                className={inputClass}
              >
                <option value="">Select Carrier Type</option>
                <option value="new">New Carrier</option>
                <option value="old">2 Year's Old</option>
              </select>

              {errors.carrierType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.carrierType}
                </p>
              )}
            </div>
          </div>

          {/* Load Pickup Schedule */}
          <div className="mt-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#02053D] mb-5">
              Load Pickup Schedule:
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-[#183B64] text-sm sm:text-base leading-relaxed">
              <li>
                1- Pickup on Monday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>

              <li>
                2- Pickup on Tuesday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>

              <li>
                3- Pickup on Wednesday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>

              <li>
                4- Pickup on Thursday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>

              <li>
                5- Pickup on Friday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>

              <li>
                6- Pickup on Saturday between 7:00 AM - 10:00 AM &lt;&gt;
                Delivery: Available with backhaul service 24/7
              </li>
            </ul>
          </div>

          {/* Agreement Description */}
          <div className="mt-7">
            <p className="text-[#183B64] text-sm sm:text-base leading-8">
              This CARRIER SETUP / AGREEMENT between{" "}
              <strong>Slee Street Logistics LLC</strong> and the Carrier/Shipper aims
              to strengthen mutual cooperation by enhancing transportation
              security for cargo and equipment across all stages of the
              commercial process. The Carrier/Shipper commits to establishing,
              maintaining, and updating a traceable and documented security
              program aligned with the listed guidelines to improve safety
              throughout their supply chain. In cases where the Carrier/Shipper
              does not oversee the manufacturing site, distribution point, or
              other segments, it will promote these security practices to those
              third-party entities. Carriers/Shippers, at a minimum, agree to
              pursue the following standards:
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => setStep(2)}
              className="w-1/2 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                if (!validateForm()) return;

                setStep(4);
              }}
              className="w-1/2 bg-emerald-500 text-white py-4 rounded-2xl font-semibold hover:bg-emerald-600 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
