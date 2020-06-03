const express = require("express");
const app = express();

app.get("/fhir/api/v1", (req, res) => {
  console.log("Hello world!!");
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
