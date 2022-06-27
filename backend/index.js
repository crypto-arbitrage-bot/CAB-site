const express = require('express');

const app = express();
const PORT = process.env.PORT | 3000;

app.listen( PORT, () => {
  console.log(`server up on http://localhost:${PORT}`);
})

app.get( '/', (req, res) => {
  res.send('hi');
})


app.get( '/version', (req, res) => {
  res.status(200).json({version: 0.1});
})