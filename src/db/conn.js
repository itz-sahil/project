const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/coronadb", {
//     useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true
// }).then(() => {
//     console.log('MongoDB  Connected'); 
// }).catch((e) => {
//     console.log('No conncection');
// })


// MONGODB CLOUD CONNECT
const uri = "mongodb+srv://sahil:sahil123@cluster0.kzey4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
   }).then(() => {
     console.log('MongoDB Atlas Connected…');
   })
   .catch(err => console.log(err));
