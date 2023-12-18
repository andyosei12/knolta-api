import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExecutiveSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  position: { type: String, required: true },
});

const ExecutiveModel = mongoose.model('executive', ExecutiveSchema);
export default ExecutiveModel;
