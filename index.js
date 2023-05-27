const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routers/news.routes"));
app.use(require("./routers/categories.routes"));
app.use(require("./routers/commentaries.router"));
const port = 1000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("сервер работает");
  }
});

mongoose
  .connect(
    "mongodb+srv://Magomed:2403kma@cluster0.96gehwd.mongodb.net/news?retryWrites=true&w=majority"
  )
  .then(() => console.log("соединение успешно"))
  .catch(() => console.log("что то пошло не так"));
