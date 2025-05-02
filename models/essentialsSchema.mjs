import mongoose from "mongoose";

const essentialsSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  travelId: {
    type: {
      driversLicence: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    required: true,
  },
  passport: {
    hasPassport: {
      type: Boolean,
      default: false,
    },
    expirationDate: {
      type: Date,
      validate: {
        validator: function (expirationDate) {
          const sixMonths = new Date();
          sixMonths.setMonth(sixMonths.getMonth() + 6);
          return expirationDate >= sixMonths;
        },
        message: "Passport must be valid for at least 6 months",
      },
    },
  },
  travelDocs: {
    type: [String],
    enum: ["Plane Ticket", "Hotel Reservation", "Car Rental Reservation"],
  },
});

export default mongoose.model("Essentials", essentialsSchema);
