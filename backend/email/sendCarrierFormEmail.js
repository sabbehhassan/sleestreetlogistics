const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendCarrierFormEmail = async (carrierFormData, pdfPath) => {
  try {
    /*
    =============================
    COMPANY EMAIL
    ================================
    */

    await transporter.sendMail({
      from: `"Slee Street Logistics LLC" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,

      subject: `New Carrier Application - ${carrierFormData.businessLegalName}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:25px;line-height:1.7;">

          <h2 style="color:#1a1a4d;">
            New Carrier Application Received
          </h2>

          <p>
            A new carrier application has been submitted through the website.
          </p>

          <table style="border-collapse:collapse;width:100%;margin-top:20px;">

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Business Legal Name</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.businessLegalName}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Applicant</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.firstName} ${carrierFormData.lastName}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Phone Number</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.phoneNumber}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Email Address</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.email}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Carrier Mobile</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.carrierMobile}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>Equipment Type</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.equipmentType}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;"><strong>ZIP Code</strong></td>
              <td style="padding:10px;border:1px solid #ddd;">${carrierFormData.zipCode}</td>
            </tr>

          </table>

          <p style="margin-top:25px;">
            Please find the attached PDF for complete carrier application details.
          </p>

        </div>
      `,

      attachments: [
        {
          filename: "Carrier_Application.pdf",
          path: pdfPath,
        },
      ],
    });

    /*
    ========================================
    APPLICANT EMAIL
    ========================================
    */

    await transporter.sendMail({
      from: `"Slee Street Logistics LLC" <${process.env.EMAIL_USER}>`,
      to: carrierFormData.email,

      subject: "Carrier Application Received",

      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;line-height:1.8;">

          <h2 style="color:#1a1a4d;">
            Hello ${carrierFormData.firstName},
          </h2>

          <p>
            Thank you for submitting your Carrier Application to
            <strong>Slee Street Logistics LLC.</strong>
          </p>

          <p>
            We have successfully received your application.
          </p>

          <p>
            Our team will review your information and contact you shortly.
          </p>

          <br>

          <p>
            Thank you for choosing Slee Street Logistics LLC.
          </p>

          <br>

          <strong>
            Best Regards,<br/>
            Slee Street Logistics LLC
          </strong>

        </div>
      `,
    });

    console.log("======================================");
    console.log("Carrier Form Emails Sent Successfully");
    console.log("======================================");

    return true;
  } catch (error) {
    console.error("Carrier Form Email Error:", error);
    throw error;
  }
};

module.exports = sendCarrierFormEmail;