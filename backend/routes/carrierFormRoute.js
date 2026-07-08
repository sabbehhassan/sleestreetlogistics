const express = require("express");
const router = express.Router();
const fs = require("fs");

const generateCarrierFormPDF = require("../pdf/generateCarrierFormPDF");
const sendCarrierFormEmail = require("../email/sendCarrierFormEmail");

router.post("/submit-carrier-form", async (req, res) => {
  try {
    // =========================================
    // GET FORM DATA
    // =========================================
    const formData = req.body;

    console.log("CARRIER FORM BODY =>", formData);

    // =========================================
    // VALIDATION
    // =========================================
    if (
      !formData.businessLegalName ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.carrierMobile ||
      !formData.equipmentType ||
      !formData.zipCode
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Carrier Name
    formData.carrierMobile =
      formData.carrierMobile === "Other"
        ? formData.otherCarrier
        : formData.carrierMobile;

    formData.submittedAt = new Date();

    // =========================================
    // GENERATE PDF
    // =========================================
    const pdfPath = await generateCarrierFormPDF(formData);

    console.log("PDF GENERATED =>", pdfPath);

    // =========================================
    // VERIFY PDF
    // =========================================
    if (!fs.existsSync(pdfPath)) {
      throw new Error("Carrier Form PDF was not generated.");
    }

    // =========================================
    // SEND EMAILS
    // =========================================
    await sendCarrierFormEmail(formData, pdfPath);

    console.log("EMAIL SENT SUCCESSFULLY");

    // =========================================
    // DELETE TEMP PDF
    // =========================================
    if (fs.existsSync(pdfPath)) {
      fs.unlinkSync(pdfPath);
      console.log("TEMP PDF DELETED");
    }

    // =========================================
    // SUCCESS RESPONSE
    // =========================================
    return res.status(200).json({
      success: true,
      message: "Carrier Application submitted successfully.",
    });
  } catch (error) {
    console.error("CARRIER FORM ROUTE ERROR =>", error);
    console.error("ERROR MESSAGE =>", error.message);
    console.error("ERROR STACK =>", error.stack);

    return res.status(500).json({
      success: false,
      message: error.message || "Carrier Application failed.",
    });
  }
});

module.exports = router;