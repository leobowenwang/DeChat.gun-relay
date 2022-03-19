// react-scripts 5.0.0 does not support express = webpack 5 default imports
const express = require("express");
const GUN = require("gun");
const app = express();
app.use(GUN.serve);

const server = app.listen(process.env.port, () => {
  console.log(`Example app listening at http://${process.env.PUBLIC_URL}:${process.env.port}`);
});

GUN({ web: server });
