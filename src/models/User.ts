import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  }

})

export default mongoose.model('User', UserSchema)