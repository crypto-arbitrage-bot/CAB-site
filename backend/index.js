const express = require('express');

const app = express();
const PORT = 3000 | process.env.PORT;

app.listen( PORT, () => {
  console.log(`server up on http://localhost:${PORT}`);
})

app.get( '/', (req, res) => {
  res.send('hi');
})


app.get( '/version', (req, res) => {
  res.status(200).json({version: 0.1});
})