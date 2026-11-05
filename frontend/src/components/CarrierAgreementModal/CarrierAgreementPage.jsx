import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgreementSelection from "./AgreementSelection";
import TruckingAgreement from "./TruckingAgreement";
import CarrierInformationStep from "./CarrierInformationStep";
import ConditionsStep from "./ConditionsStep";
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

  const resetAgreement = () => {
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
  };

  const handleDone = () => navigate("/");

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {step === 1 && (
          <AgreementSelection
            setStep={setStep}
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
          <ConditionsStep
            setStep={setStep}
            agreementData={agreementData}
          />
        )}
        {step === 5 && agreementData.carrierType === "new" && (
          <NewCarrierPaymentStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 6 && (
          <FinalSubmissionStep
            setStep={setStep}
            agreementData={agreementData}
            setAgreementData={setAgreementData}
          />
        )}
        {step === 7 && (
          <AgreementSuccessStep
            onNewAgreement={resetAgreement}
            onDone={handleDone}
          />
        )}
      </div>
    </div>
  );
}
