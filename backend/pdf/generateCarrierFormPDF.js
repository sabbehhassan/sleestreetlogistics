const fs = require("fs");
const path = require("path");

const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const puppeteerPackage = require("puppeteer");

const carrierFormTemplate = require("../templates/carrierFormTemplate");

const isProduction = process.env.NODE_ENV === "production";

const generateCarrierFormPDF = async (formData) => {
  let browser;

  try {
    const html = carrierFormTemplate(formData);

    const pdfDir = path.join(process.cwd(), "generated-pdfs");

    if (!isProduction && !fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    const pdfPath = isProduction
      ? `/tmp/Carrier_Form_${Date.now()}.pdf`
      : path.join(pdfDir, `Carrier_Form_${Date.now()}.pdf`);

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: isProduction
        ? await chromium.executablePath()
        : puppeteerPackage.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    });

    await browser.close();

    console.log("=====================================");
    console.log("CARRIER FORM PDF GENERATED");
    console.log(pdfPath);
    console.log("=====================================");

    return pdfPath;
  } catch (error) {
    console.error("Carrier Form PDF Error:", error);

    if (browser) {
      await browser.close();
    }

    throw error;
  }
};

module.exports = generateCarrierFormPDF;