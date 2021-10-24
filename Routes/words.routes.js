const wordApi = require("express").Router();
const service = require("../Services/words.service");

wordApi.get("/", service.getWords);
wordApi.post("/", service.postWords);

module.exports = wordApi;
