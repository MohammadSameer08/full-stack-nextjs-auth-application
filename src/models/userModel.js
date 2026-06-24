import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  formatPasswordToken: {
    type: String,
  },
  formatPasswordTokenExpiry: { type: Date },
  verifyToken: {
    type: String,
  },
  verifyTokenExpiry: { type: Date },
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
