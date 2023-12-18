import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProgramSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const ProgramModel = mongoose.model('program', ProgramSchema);
export default ProgramModel;
