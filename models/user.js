import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, max: 20 },
  last_name: { type: String, required: true, max: 20 },
  user_name: { type: String, unique: true, required: true, max: 15 },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
