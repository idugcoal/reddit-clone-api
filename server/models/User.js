import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 at least characters']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 8 at least characters']
  },
});

//Write some encryption here

const User = mongoose.model('User', userSchema);
export default User;