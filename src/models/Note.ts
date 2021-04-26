import * as mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required:[true, 'Please add a title.'],
    unique: true,
    trim: true,
    MaxLength: [40,'maxlength']
  },
  description: {
    type: String,
    required: true,
    maxLength:[200,'Description']
  }

})

export default mongoose.model('Note', NoteSchema)