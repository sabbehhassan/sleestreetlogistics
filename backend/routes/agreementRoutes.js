const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const generateAgreementPDF = require("../pdf/generateAgreementPDF");
const sendAgreementEmail = require("../email/sendAgreementEmail");

router.post("/submit-agreement", async (req, res) => {
  try {

    // =========================================
    // GET FORM DATA
    // =========================================
    const formData = req.body;

    console.log("AGREEMENT BODY =>", formData);

    // =========================================
    // VALIDATE EMAIL
    // =========================================
    if (
      !formData.email ||
      typeof formData.email !== "string" ||
      !formData.email.includes("@")
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid email is required",
      });
    }

    // =========================================
    // GENERATE PDF FILE NAME
    // =========================================
    const fileName = `agreement-${Date.now()}.pdf`;

    const pdfPath = path.join(
      "/tmp",
      fileName
    );

    console.log("PDF PATH =>", pdfPath);

    // =========================================
    // GENERATE PDF
    // =========================================
    await generateAgreementPDF(
      formData,
      pdfPath
    );

    console.log("PDF GENERATED");

    // =========================================
    // CHECK PDF EXISTS
    // =========================================
    if (!fs.existsSync(pdfPath)) {
      throw new Error(
        "PDF file was not generated."
      );
    }

    // =========================================
    // SEND EMAIL
    // =========================================
    await sendAgreementEmail(
      formData.email,
      pdfPath,
      formData
    );

    console.log("EMAIL SENT SUCCESSFULLY");

    // =========================================
    // DELETE TEMP PDF
    // =========================================
    fs.unlinkSync(pdfPath);

    console.log("TEMP PDF DELETED");

    // =========================================
    // SUCCESS RESPONSE
    // =========================================
    return res.status(200).json({
      success: true,
      message: "Agreement submitted successfully",
    });

  } catch (error) {

    console.error(
      "AGREEMENT ROUTE ERROR =>",
      error
    );

    console.error(
      "ERROR MESSAGE =>",
      error.message
    );

    console.error(
      "ERROR STACK =>",
      error.stack
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Agreement submission failed",
    });

  }
});

module.exports = router;