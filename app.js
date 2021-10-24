const express = require("express");
require("dotenv").config();

const mongo = require("./Shared/mongo");

const wordsData = require("./Routes/words.routes");

const PORT = process.env.PORT || 3001;

const app = express();

//middlewares

// IFEE
(async () => {
  await mongo.connectDB();

  app.use(express.json());

  app.use((req, res, next) => {
    console.log("common middle ware called");
    next();

    app.use("/words", wordsData);
  });

  //

  app.listen(process.env.PORT, () =>
    console.log(`Server started at ${process.env.PORT}`)
  );
})();
