const BaseMongoConnection = require("./BaseMongoConnection")

class MongoConnection extends BaseMongoConnection {
  constructor() {
    super()
  }
}

const instance = new MongoConnection()

module.exports = instance
