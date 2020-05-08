import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`app listening on port ${port}`));
