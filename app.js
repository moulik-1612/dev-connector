import express from "express"
import cors from 'cors'

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("this is the home page of api for the dev connector");
})

app.listen(3001, () => {
    console.log('server is running on the 3001');
})
