const { ObjectId } = require("mongodb");

const db = require("../Shared/mongo");

const service = {
  async getWords(req, res) {
    try {
      const getWord = await db.words.find().toArray();
      console.log(getWord);

      res.status(200).send({ alert: "data recieved", getWord });
    } catch (err) {
      res.status(400).send({ error: err });
      console.log("error in getting data", err);
    }
  },

  async postWords(req, res) {
    try {
      const { insertedId: _id } = await db.words.insertOne(req.body);
      console.log("created data", _id);
      res.status(200).send({ ...req.body, _id });
    } catch (err) {
      res.status(500).send({ Error: "Check the service" });
      console.log("Error in posting data", err);
    }
  },
};

module.exports = service;
