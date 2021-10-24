const { MongoClient } = require("mongodb");

// const URL =
//   "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/dictionary?retryWrites=true&w=majority";
// const DB_NAME = "dictionary";
const client = new MongoClient(process.env.URL);

module.exports = {
  database: null, //initially null
  words: null,

  async connectDB() {
    try {
      // db connected using mongodb driver
      await client.connect();
      console.log("DB connected at", process.env.URL);

      // database selected
      this.database = client.db(process.env.DB_NAME);
      console.log(`${process.env.DB_NAME} selected successfully`);

      //collection selected;
      this.words = this.database.collection("words");
    } catch (err) {
      console.log("Error in db connection", err);
    }
  },
};
