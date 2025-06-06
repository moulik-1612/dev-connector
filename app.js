import express from "express";
import cors from "cors";
import router from "./routes/foutes.js";

const app = express();
app.use(cors({
  origin: "*"
}));

app.use(router);


app.listen(3001, () => {
  console.log("server is running on the 3001");
});
