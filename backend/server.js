require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contact");
const agreementRoutes = require("./routes/agreementRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api", agreementRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Agreement Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});