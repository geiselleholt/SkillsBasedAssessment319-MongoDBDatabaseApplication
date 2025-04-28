import mongoose from "mongoose";

const essentialsSchema = new mongoose.Schema({
  userID: {
    type: Number,
    required: true,
  },
  travelId: {
      driversLicence: Boolean,
    //   default: false,
    // required: true,
  },
  passport: {
    type: Boolean,
    // default: false,
    expirationDate: Date,
  },
  travelDocs: {
    type: [String],
  },
  enum: ["Plane Ticket", "Hotel Reservation", "Car Rental Reservation"],
});

export default mongoose.model("Essentials", essentialsSchema);
