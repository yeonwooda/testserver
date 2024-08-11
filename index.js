const express = require("express");
const bodyParse = require("body-parser");
const app = express();
app.use(bodyParse.json());
const port = process.env.PORT || 3000;
app.listen(port);

app.get("/api/lunch", (req, res) =>
  res.json({ meun: "떡볶이", store: "신전떡볶이", price: 15000 })
);
app.get("/api/dinner", (req, res) =>
  res.json({ meun: "수원왕갈비", store: "집앞", price: 11900 })
);
