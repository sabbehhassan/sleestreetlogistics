export const agreementServices = [
  {
    name: "ONBOARDING LANE SETUP FEE",
    fee: 425,
    description: "Refundable after first delivery",
  },
  {
    name: "TWIC CARD REGISTRATION",
    fee: 399,
    description: "Same-day processing",
  },
  {
    name: "TRAILER RENTAL (3 MONTHS)",
    fee: 485,
    description: "",
  },
  {
    name: "FACTORING SERVICES",
    fee: 250,
    description: "Same-day registration",
  },
  {
    name: "INSURANCE REGISTRATION",
    fee: 699,
    description: "",
  },
];

export const getAgreementServiceValue = (service) =>
  `${service.name} - $${service.fee}${
    service.description ? ` (${service.description})` : ""
  }`;

export const ONBOARDING_LANE_SETUP_SERVICE_VALUE = getAgreementServiceValue(
  agreementServices[0],
);
