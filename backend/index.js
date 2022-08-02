const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen( PORT, () => {
  console.log(`server up on http://localhost:${PORT}`);
})

app.get( '/', (req, res) => {
  res.send('CAB Version API v1.0');
})


app.get( '/version', (req, res) => {
  res.json({version: "0.6.1" });
})