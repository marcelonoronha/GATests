import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username!"],
    unique: [true, "Username already exists!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpire: Date,
  verifyToken: String,
  verifyExpire: Date,
});

const User = mongoose.models.User || mongoose.model("user", UserSchema);

export default User;
