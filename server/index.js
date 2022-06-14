const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");
const app = express();
const pdfTemplate = require("./documents");
const PORT = 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(PORT, (req, res) => {
  console.log(`your are running on port ${PORT}`);
});
