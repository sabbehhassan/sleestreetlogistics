const nodemailer = require("nodemailer");

const sendAgreementEmail = async (
  userEmail,
  pdfPath,
  formData
) => {

  try {

    // =========================================
    // AUTO FIX EMAIL
    // =========================================
    const recipientEmail =
      userEmail ||
      formData?.email;

    console.log("USER EMAIL =>", recipientEmail);

    // =========================================
    // VALIDATE USER EMAIL
    // =========================================
    if (
      !recipientEmail ||
      typeof recipientEmail !== "string" ||
      !recipientEmail.includes("@")
    ) {
      throw new Error(
        "Recipient email is missing or invalid."
      );
    }

    // =========================================
    // VALIDATE ENV VARIABLES
    // =========================================
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      throw new Error(
        "EMAIL_USER or EMAIL_PASS missing in environment variables."
      );
    }

    console.log(
      "EMAIL_USER =>",
      process.env.EMAIL_USER
    );

    // =========================================
    // HOSTINGER SMTP
    // =========================================
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================================
    // VERIFY SMTP
    // =========================================
    await transporter.verify();

    console.log("SMTP VERIFIED");

    // =========================================
    // PDF ATTACHMENT
    // =========================================
    const attachments = [];

    if (pdfPath) {
      attachments.push({
        filename: "agreement.pdf",
        path: pdfPath,
      });
    }

    // =====================================================
    // STEP 1
    // SEND MAIL TO USER
    // =====================================================
    const userMailOptions = {
      from: process.env.EMAIL_USER,

      to: recipientEmail,

      subject: "Your Agreement PDF",

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">

          <h2 style="color:#0B7BEA;">
            Agreement Submitted Successfully
          </h2>

          <p>
            Hello ${
              formData?.printName ||
              formData?.carrierName ||
              "User"
            },
          </p>

          <p>
            Thank you for submitting your agreement.
          </p>

          <p>
            Your agreement PDF is attached with this email.
          </p>

          <br />

          <p>
            Regards,<br/>
            Prairie Lines Transportation
          </p>

        </div>
      `,

      attachments,
    };

    const userMailResponse =
      await transporter.sendMail(
        userMailOptions
      );

    console.log(
      "USER EMAIL SENT =>",
      userMailResponse.messageId
    );

    // =====================================================
    // STEP 2
    // SEND MAIL TO ADMIN / HOSTINGER MAILBOX
    // =====================================================
    const adminMailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: recipientEmail,

      subject: `New Agreement Submitted - ${
        formData?.companyName || "Company"
      }`,

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">

          <h2 style="color:#0B7BEA;">
            New Agreement Submitted
          </h2>

          <table style="width:100%; border-collapse: collapse;">

            <tr>
              <td style="padding:10px; font-weight:bold;">
                Carrier Name:
              </td>

              <td style="padding:10px;">
                ${formData?.carrierName || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">
                Company Name:
              </td>

              <td style="padding:10px;">
                ${formData?.companyName || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">
                Email:
              </td>

              <td style="padding:10px;">
                ${recipientEmail}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">
                Phone:
              </td>

              <td style="padding:10px;">
                ${formData?.phone || "-"}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; font-weight:bold;">
                MC/DOT:
              </td>

              <td style="padding:10px;">
                ${formData?.mcDot || "-"}
              </td>
            </tr>

          </table>

          <div style="
            margin-top:20px;
            padding:20px;
            background:#f3f4f6;
            border-radius:10px;
          ">
            <p>
              Agreement PDF attached below.
            </p>
          </div>

        </div>
      `,

      attachments,
    };

    const adminMailResponse =
      await transporter.sendMail(
        adminMailOptions
      );

    console.log(
      "ADMIN EMAIL SENT =>",
      adminMailResponse.messageId
    );

    return true;

  } catch (error) {

    console.log(
      "SEND AGREEMENT EMAIL ERROR =>",
      error
    );

    throw error;
  }
};

module.exports = sendAgreementEmail;