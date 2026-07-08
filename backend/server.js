require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");
const agreementRoutes = require("./routes/agreementRoutes");
const carrierFormRoutes = require ("./routes/carrierFormRoute");

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(express.json());

app.use(express.static("public"));

app.use("/api/agreement", agreementRoutes);
app.use("/api/carrier-form", carrierFormRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Agreement Backend Running");
});
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working",
  });
});

// Start the server when running locally
if (require.main === module) {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

// Export the app for Vercel serverless functions
module.exports = app;