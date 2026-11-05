import { useState } from "react";

import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import ConditionsStep from "./ConditionsStep";
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

    // Driver Information
    driverName: "",
    driverPhone: "",
    licenseNumber: "",

    // Services
    selectedServices: [],

    // Payment
    paymentMethod: "",
    paymentTermsMethod: "",

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

    setAgreementData({
      agreementType: "",
      selectedDispatch: "",
      agreementDate: "",

      carrierName: "",
      companyName: "",
      mcDot: "",
      phone: "",
      carrierType: "",

      driverName: "",
      driverPhone: "",
      licenseNumber: "",

      selectedServices: [],

      paymentMethod: "",
      paymentTermsMethod: "",

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

        {/* Step 3 - Carrier Information */}
        {step === 3 && (
          <CarrierInformationStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 4 - Conditions */}
        {step === 4 && (
          <ConditionsStep setStep={setStep} agreementData={agreementData} />
        )}

        {/* Step 5 - Payment Terms */}
        {step === 5 && (
          <NewCarrierPaymentStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 6 - Final Submission */}
        {step === 6 && (
          <FinalSubmissionStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}

        {/* Step 7 - Success */}
        {step === 7 && (
          <AgreementSuccessStep setStep={setStep} onClose={handleClose} />
        )}
      </div>
    </div>
  );
}
