const allEssentials = [
  {
    userID: 1001,
    travelId: {
      driversLicence: true,
    },
    passport: {
      isAvailable: true,
      expirationDate: new Date("2025-12-31"), // Future date
    },
    travelDocs: ["Plane Ticket", "Hotel Reservation"],
  },
  {
    userID: 1002,
    travelId: {
      driversLicence: false,
    },
    travelDocs: ["Car Rental Reservation"],
  },
  {
    userID: 1003,
    travelId: {
      driversLicence: true,
    },
    passport: {
      isAvailable: false,
      expirationDate: new Date("2023-01-15"), // Past expiration (for testing)
    },
    travelDocs: [], // Empty array allowed
  },
  {
    userID: 1004,
    travelId: {
      driversLicence: false,
    },
    passport: {
      isAvailable: true,
      expirationDate: new Date("2026-05-20"),
    },
    travelDocs: ["Plane Ticket", "Hotel Reservation", "Car Rental Reservation"],
  },
  {
    userID: 1005,
    travelId: {
      driversLicence: true,
    },
    passport: null,
    travelDocs: null, // Will be converted to empty array by Mongoose
  },
];

export default allEssentials;
