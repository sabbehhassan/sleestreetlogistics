import { useState } from "react";

export default function DispatchStep({
  selectedDispatch,
  setSelectedDispatch,
}) {
  const [error, setError] = useState("");

  const dispatchCompanies = [
    "GO Lane Dispatch",
    "Logity Dispatch",
    "AFT Dispatch",
    "Solace Dispatch",
  ];

  

  return (
    <div className="mt-8">

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#02053D] mb-3">
        Step 1: Dispatch Company
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">
        Select your preferred dispatch company from the list below.
      </p>

      {/* Dropdown */}
      <div>
        <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
          Dispatch Company Name *
        </label>

        <select
          value={selectedDispatch}
          onChange={(e) => {
            setSelectedDispatch(e.target.value);
            setError("");
          }}
          className={`w-full border rounded-xl px-4 py-3 text-sm sm:text-base bg-white focus:outline-none focus:ring-2 transition ${
            error
              ? "border-red-400 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        >
          <option value="">Select Dispatch Company</option>

          {dispatchCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}
      </div>

    </div>
  );
}