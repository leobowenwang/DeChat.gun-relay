const gunLib = require("gun");

const server = require("http")
  .createServer()
  .listen(8080, () => {
    console.log("Relay peer started on port " + 8080 + " with /gun");
  });

const gun = gunLib({
  web: server,
});
