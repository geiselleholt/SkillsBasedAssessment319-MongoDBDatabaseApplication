import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 30,
  },
  destination: {
    type: String,
    required: true,
  },
  child: {
    type: Boolean,
    default: false,
  },
  tripDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
