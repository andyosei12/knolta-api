import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: { type: Date, required: true },
  first_acolyte: { type: String },
  second_acolyte: { type: String },
  mc: { type: String },
  cross_bearer: { type: String },
  thurifer: { type: String },
  boat_bearer: { type: String },
  created_at: { type: Date, default: Date.now },
});

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);
export default AppointmentModel;
