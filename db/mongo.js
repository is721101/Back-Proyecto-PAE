const mongoose = require('mongoose');
const dbUser = "is722204";
const dbPass = "Mateito123";
const dbName = "PAE";//
const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.wvjve.mongodb.net/${dbName}?retryWrites=true&w=majority`;
//const dbUrl=`mongodb+srv://is722204:<password>@cluster0.wvjve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=> console.log("Conectado a la base de datos"))
  .catch((err)=> console.log("No conectado, error", err))

module.exports = mongoose;