import express from "express";
import cors from "cors";
import router from "./routes/foutes.js";

const app = express();

app.use(router);

app.use(cors());

app.listen(3001, () => {
  console.log("server is running on the 3001");
});
