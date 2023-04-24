const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wilderController.findAll)

app.post("/api/wilder", wilderController.create);

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
}

start();