const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {

    console.log("BODY =>", req.body);

    console.log("EMAIL_USER =>", process.env.EMAIL_USER);
    console.log("EMAIL_PASS =>", process.env.EMAIL_PASS ? "Loaded" : "Missing");

    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    if (typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Valid email required",
      });
    }

    // ENV validation
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS
    ) {
      return res.status(500).json({
        success: false,
        message: "Email configuration missing",
      });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure =
      process.env.SMTP_SECURE === undefined
        ? smtpPort === 465
        : process.env.SMTP_SECURE === "true";

    console.log("SMTP =>", {
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: process.env.EMAIL_USER,
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Mail options
    const mailOptions = {
      from: `"Slee Street Logistics" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Contact Form Message From ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          
          <h2 style="color:#0B7BEA;">
            New Contact Form Submission
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <div style="
            margin-top:20px;
            padding:20px;
            background:#f3f4f6;
            border-radius:10px;
          ">
            <h3>Message</h3>

            <p style="line-height:1.8;">
              ${message}
            </p>
          </div>

        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("MAIL SENT =>", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  }  catch (error) {

  console.error("FULL ERROR =>", error);

  console.error("ERROR MESSAGE =>", error.message);

  console.error("ERROR RESPONSE =>", error.response);

  const isAuthError = error.code === "EAUTH" || error.responseCode === 535;

  return res.status(500).json({
    success: false,
    message: isAuthError
      ? "SMTP login failed. Please check email address, mailbox password, SMTP host, and port."
      : error.message || "Failed to send message",
  });

}

  
});

module.exports = router;
