import { useState } from "react";
import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import NewCarrierPaymentStep from "./NewCarrierPaymentStep";
import FinalSubmissionStep from "./FinalSubmissionStep";
import AgreementSuccessStep from "./AgreementSuccessStep";

export default function CarrierAgreementModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  // Main Shared Form State
  const [agreementData, setAgreementData] = useState({
    agreementType: "",

    // Step 1
    selectedDispatch: "",
    agreementDate: "",

    // Step 2
    carrierName: "",
    companyName: "",
    mcDot: "",
    phone: "",
    carrierType: "",
    selectedServices: [],

    // Step 3 / Step 4
    paymentMethod: "",

    // Final Step
    signature: "",
    printName: "",
    email: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    date: "",
  });

  const handleClose = () => {
    setStep(1);

    // Reset complete form
    setAgreementData({
      agreementType: "",
      selectedDispatch: "",
      agreementDate: "",

      carrierName: "",
      companyName: "",
      mcDot: "",
      phone: "",
      carrierType: "",
      selectedServices: [],

      paymentMethod: "",

      signature: "",
      printName: "",
      email: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
      date: "",
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      <div className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Step 1 */}
        {step === 1 && (
          <AgreementSelection
            setStep={setStep}
            onClose={handleClose}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 2 */}
        {step === 2 && (
          <TruckingAgreement
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 3 */}
        {step === 3 && (
          <CarrierInformationStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 4 */}
        {step === 4 && (
          <NewCarrierPaymentStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 5 */}
        {step === 5 && (
          <FinalSubmissionStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 6 */}
        {step === 6 && (
          <AgreementSuccessStep
            setStep={setStep}
            onClose={handleClose}
          />
        )}

      </div>
    </div>
  );
}