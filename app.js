import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
const app = express();

app.use(cors());

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName)

const demoBlog = path.join(dirname, "demo blogs", "blog.json");
console.log(demoBlog)
app.get("/", (req, res) => {
  res.send("this is the home page of api for the dev connector");
});

app.get("/demoblogs", async (req, res) => {
  
  try {
    const data = await fs.readFile(demoBlog, "utf-8") 
    res.send(JSON.parse(data))
  } catch (error) {
    console.error("getting error in sending demo blogs", err);
    return res.status(500).json({ error: "failed to read blogs" });
  }
});

app.listen(3001, () => {
  console.log("server is running on the 3001");
});
