import env from "dotenv";
import express from "express";
import nunjucks from "nunjucks";
import minify from "express-minify";
import compression from "compression";
import events from "./data/events";

env.config();
const app = express();
const { PORT } = process.env;

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(compression());
app.use(minify());
app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.render("index.html", { events });
});

app.listen(PORT, () => {
  console.log(`Serve in http://localhost:${PORT}`);
  console.log("Shutdown: ctrl + c");
});
