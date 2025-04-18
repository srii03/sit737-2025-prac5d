const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from SIT737 microservice!');
});

app.listen(port, () => {
  console.log(`Microservice running at http://localhost:${port}`);
});
