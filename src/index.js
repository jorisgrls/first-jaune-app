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

app.put("/api/wilder/:id", wilderController.update)

app.delete("/api/wilder/:id", wilderController.delete)


const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
}

start();