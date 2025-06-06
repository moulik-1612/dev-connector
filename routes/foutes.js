import { Router } from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";


const router = Router();

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
console.log(dirname)

const demoBlogPath = path.join("demo blogs", "blog.json");

router.get("/", (req, res) => {
  res.send("this is the home page of api for the dev connector");
});


router.get("/demoblogs", async (req, res) => {
  
  try {
    const data = await fs.readFile(demoBlogPath, "utf-8") 
    res.send(JSON.parse(data))
  } catch (error) {
    console.error("getting error in sending demo blogs", err);
    return res.status(500).json({ error: "failed to read blogs" });
  }
});


export default router