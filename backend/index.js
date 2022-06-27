const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen( process.env.PORT || 5000, () => {
  console.log(`server up on http://localhost:${process.env.PORT || 5000}`);
})

app.get( '/', (req, res) => {
  res.send('hi');
})


app.get( '/version', (req, res) => {
  res.status(200).json({version: 0.1});
})