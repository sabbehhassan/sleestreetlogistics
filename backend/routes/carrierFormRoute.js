import express from "express";

const router = express.Router();

router.post("/submit-carrier-form", async (req, res) => {
  try {
    const {
      businessLegalName,
      firstName,
      lastName,
      phoneNumber,
      email,
      carrierMobile,
      otherCarrier,
      equipmentType,
      zipCode,
    } = req.body;

    // Required Fields Validation
    if (
      !businessLegalName ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !carrierMobile ||
      !equipmentType ||
      !zipCode
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Final Carrier Name
    const finalCarrierMobile =
      carrierMobile === "Other" ? otherCarrier : carrierMobile;

    // Form Data Object
    const carrierFormData = {
      businessLegalName,
      firstName,
      lastName,
      phoneNumber,
      email,
      carrierMobile: finalCarrierMobile,
      equipmentType,
      zipCode,
      submittedAt: new Date(),
    };

    console.log("========== NEW CARRIER FORM ==========");
    console.log(carrierFormData);
    console.log("======================================");

    return res.status(200).json({
      success: true,
      message: "Carrier form submitted successfully.",
      data: carrierFormData,
    });
  } catch (error) {
    console.error("Carrier Form Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default router;