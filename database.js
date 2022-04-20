//The require(‘mongoose’) call above returns a Singleton object.
//It means that the first time you call require(‘mongoose’), it
//is creating an instance of the Mongoose class and returning it.
//On subsequent calls, it will return the same instance that was
//created and returned to you the first time because of how module
//import/export works in ES6.
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    mongoose
      .connect(
        'mongodb+srv://nik09877:7978897873k@cluster0.e0s6k.mongodb.net/social-bee-db?retryWrites=true&w=majority'
      )
      .then(() => {
        console.log('database connection successful')
      })
      .catch((err) => {
        console.log('database connection error ' + err)
      })
  }
}
//"mongodb+srv://admin:dbUserPassword@twitterclonecluster.e0mcw.azure.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority"
module.exports = new Database()
