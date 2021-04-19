const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mino', {auto_reconnect:true, useNewUrlParser: true, useUnifiedTopology: true}).catch((err)=>{
    console.log('error')
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten',kittySchema)

const silence = new Kitten({name: "silence"})
silence.save().then(() => console.log('meow'));
// const hoge = Kitten.find()
return;