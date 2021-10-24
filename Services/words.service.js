const { ObjectId } = require("mongodb");

const db = require("../Shared/mongo");

const service = {
  async getWords(req, res) {
    try {
      const getWord = await db.words.findOne({ email: req.body.email });

      if (getWord) {
        res.status(200).send(getWord);
        console.log(getWord);
      } else res.status(400).send({ error: "Error in data " });
    } catch (err) {
      console.log("error in getting data", err.message);
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
