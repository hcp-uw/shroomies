const express = require('express');
const cors = require('cors');

const port = 4000;
const app = express();
app.use(cors());

/** GET endpoint for sending back a Hello World message */
app.post('/identify', (req, res) => {
  //res.type('text');
  //const imgURI = req.body.image;
  res.send(res.json({response: "haha this isn't implemented yetttt"}));
});

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});