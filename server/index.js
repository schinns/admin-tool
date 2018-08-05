import express from 'express';
import db from "./database";

const app = express();
const PORT = process.env.PORT || 4800;

db.connect((err) => {
  err ? console.error("connection error", err.stack) : console.log("DATABASE -- connected");
});

app.listen(PORT, () => {
  console.log(`SERVER -- listening on http://localhost:${PORT}`);
});
