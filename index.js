const server = require("./server.js");

const userRoutes = require("./routes/userRoutes");

server.use("/api/",userRoutes)

const port = 4050;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
