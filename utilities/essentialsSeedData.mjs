const allEssentials = [
  // 1. The "I Thought My License Was Optional" Traveler
  {
    userID: "680fe1d53faad97bec992f3f", // Emergency number for a reason
    travelId: {
      driversLicence: false, // "Do I really need it for an international flight?"
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date("2027-01-01"), // Expired 2 years ago (validation will fail)-changed to 2027 to pass
    },
    travelDocs: ["Plane Ticket"], // One-way ticket to disappointment
  },

  // 2. The Overconfident Road Tripper
  {
    userID: "68144c3d020276501ef8524e", // Thinks he knows the answer to everything
    travelId: {
      driversLicence: true, // ...but it's actually his library card
    },
    passport: {
      hasPassport: false, // "We're driving to Canada, right?"
    },
    travelDocs: ["Car Rental Reservation"], // For a car they can't legally drive
  },

  // 3. The "Fake It Till You Make It" Vacationer
  {
    userID: "68144c3d020276501ef85252", // Licensed to... improvise?
    travelId: {
      driversLicence: true, // Photoshop is a skill
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date("2099-12-31"), // Suspiciously far future date
    },
    travelDocs: ["Hotel Reservation", "Plane Ticket"], // Both under the name "James Bond"
  },

  // 4. The Unprepared Honeymooner
  {
    userID: "68144c3d020276501ef8524e", // Unlucky number
    travelId: {
      driversLicence: true, // But it's in their maiden name
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date("2099-12-31"),
    },
    travelDocs: [], // "I thought YOU booked everything, honey!"
  },

  // 5. The Time Traveler (From 1999)
  {
    userID: "68144c3d020276501ef85251", // Back to the future
    travelId: {
      driversLicence: true, // Polaroid photo laminated as ID
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date("2029-01-01"), // Y2K compliant!
    },
    travelDocs: ["Plane Ticket"], // Paper ticket purchased at a physical travel agency
  },
];

export default allEssentials;
