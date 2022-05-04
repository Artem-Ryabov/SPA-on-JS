const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json({extended: true}));
app.use("/", express.static("public"));

app.get("*", (req, res) => {

res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

start();

async function start() {
  try {
    app.listen(port, () => console.log("Back-end app starts at port:" + port));
  } catch (e) {
    console.log("Error: " + e.message);
    process.exitCode = 1;
  }
}