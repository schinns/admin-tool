import express from 'express';

const app = express();
const PORT = process.env.PORT || 4800;

app.listen(PORT, () => {
  console.log(`listening on localhost:4800`);
});
