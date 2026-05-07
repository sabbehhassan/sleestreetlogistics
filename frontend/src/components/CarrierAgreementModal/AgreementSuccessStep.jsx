import {
  CheckCircle2,
  Sparkles,
  MailCheck,
} from "lucide-react";

export default function AgreementSuccessStep({ setStep, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4 py-4 overflow-y-auto">

      <div className="relative w-full max-w-xl bg-white rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-10 blur-3xl"></div>

        <div className="relative px-6 sm:px-8 py-8 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">

              <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-30 rounded-full animate-pulse"></div>

              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.4)]">
                <CheckCircle2
                  size={40}
                  className="text-white"
                />
              </div>

              <div className="absolute -top-1 -right-1 bg-yellow-100 rounded-full p-1.5">
                <Sparkles
                  size={12}
                  className="text-yellow-500"
                />
              </div>

            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#02053D] mb-3">
            Agreement Submitted
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-7 text-sm sm:text-base">
            Your trucking agreement has been submitted successfully.
            The agreement PDF has been sent to your email address.
          </p>

          {/* Email Card */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-4 text-left">

            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
              <MailCheck
                size={24}
                className="text-emerald-500"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[#02053D] mb-1">
                Check Your Email
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Please check your inbox or spam folder to view your agreement PDF.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-3.5 rounded-2xl transition-all"
            >
              New Agreement
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold py-3.5 rounded-2xl shadow-lg transition-all"
            >
              Done
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}