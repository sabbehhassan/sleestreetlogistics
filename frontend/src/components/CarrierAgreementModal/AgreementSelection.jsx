import { X } from "lucide-react";

export default function AgreementSelection({
  setStep,
  onClose,
  agreementData,
  setAgreementData,
}) {
  const handleSelectAgreement = () => {
    setAgreementData({
      ...agreementData,
      agreementType: "Trucking Service Agreement",
    });

    setStep(2);
  };

  return (
    <div className="flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 min-h-[500px] bg-[#f7f8fa] rounded-2xl relative">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl p-2 shadow-sm transition"
      >
        <X size={20} className="text-gray-600" />
      </button>

      <div className="w-full max-w-2xl text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3d3d02] mb-4">
          Select an Agreement
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Please choose the type of agreement you want to proceed with.
        </p>

        {/* Agreement Button */}
        <div>
          <button
            onClick={handleSelectAgreement}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold py-5 rounded-2xl shadow-lg transition duration-300"
          >
            🚚 Trucking Service Agreement
          </button>
        </div>

      </div>
    </div>
  );
}