import env from "dotenv";
import express from "express";
import nunjucks from "nunjucks";
import events from "./data/events";

env.config();
const app = express();
const { PORT } = process.env;

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.static("src/public"));
app.get("/", (req, res) => {
  res.render("index.html", { events });
});

app.listen(PORT, () => {
  console.log(`Serve in http://localhost:${PORT}`);
  console.log("Shotdown: ctrl + c");
});
