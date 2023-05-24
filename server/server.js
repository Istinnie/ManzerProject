//  https://www.mongodb.com/languages/mern-stack-tutorial

import express from "express";
import cors from "cors";

import dotenv from "dotenv/config";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
