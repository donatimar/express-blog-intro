const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = { message: "Server del mio blog" };
  res.json(message);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
