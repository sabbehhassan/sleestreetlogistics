import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import NewCarrierPaymentStep from "./NewCarrierPaymentStep";
import FinalSubmissionStep from "./FinalSubmissionStep";
import AgreementSuccessStep from "./AgreementSuccessStep";

export default function CarrierAgreementPage() {
  const navigate = useNavigate();
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

    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative my-6 w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
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
