import express from 'express';
import db from "./database";
import router from './routes/router';
import middlewares from './middlewares';

const app = express();
const PORT = process.env.PORT || 4800;

middlewares(app);
router(app);

db.connect((err) => {
  err ? console.error("connection error", err.stack) : console.log("DATABASE -- connected");
});

app.listen(PORT, () => {
  console.log(`SERVER -- listening on http://localhost:${PORT}`);
});
