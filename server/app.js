require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const mongoose = require('mongoose');
const mongOptions = { useNewUrlParser: true };

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
mongoose
  .connect(process.env.DB, mongOptions)
  .then(console.log('LOOKS MONGOOD'));
