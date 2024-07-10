const { MongoClient } = require("mongodb");
const get = require("lodash.get");
const config = require("./config");

module.exports = {
  async connect() {
    const configContent = await config.read();
    const url = get(configContent, "mongodb.url");
    const databaseName = get(configContent, "mongodb.databaseName");
    const options = get(configContent, "mongodb.options");

    if (!url) {
      throw new Error("No `url` defined in config file!");
    }

    const client = await MongoClient.connect(
      url,
      options
    );

    const db = client.db(databaseName);
    db.close = client.close;
    return {
      client,
      db,
    };
  }
};
