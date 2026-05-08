import { useState } from "react";
import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import NewCarrierPaymentStep from "./NewCarrierPaymentStep";
import FinalSubmissionStep from "./FinalSubmissionStep";
import AgreementSuccessStep from "./AgreementSuccessStep";

export default function CarrierAgreementPage() {
  const [step, setStep] = useState(1);
  const [agreementData, setAgreementData] = useState({
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
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/10 p-4">
      <div className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">
        {step === 1 && (
          <AgreementSelection
            setStep={setStep}
            onClose={handleClose}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 2 && (
          <TruckingAgreement
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 3 && (
          <CarrierInformationStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 4 && (
          <NewCarrierPaymentStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 5 && (
          <FinalSubmissionStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
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
