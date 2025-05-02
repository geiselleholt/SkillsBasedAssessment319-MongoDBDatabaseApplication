import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 30,
    index: true,
  },
  destination: {
    type: String,
    required: true,
    index: true,
  },
  child: {
    type: Boolean,
    default: false,
  },
  tripDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (date) {
        return date > new Date();
      },
      message: "Did you already go on this trip? Your trip date is in the past",
    },
    index: true,
  },
});

userSchema.index({ destination: 1, tripDate: -1 });

export default mongoose.model("User", userSchema);
