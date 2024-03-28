const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const port = 4000;
const app = express();
app.use(cors());
var jsonParser = bodyParser.json();

/** GET endpoint for sending back a Hello World message */
app.post('/identify', jsonParser, function (req, res) {
  //res.type('text');
  console.log("Image Received:");
  const imgURI = req.body.image;
  console.log(imgURI);
  res.send({response: Math.random() > 0.5});
});

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});