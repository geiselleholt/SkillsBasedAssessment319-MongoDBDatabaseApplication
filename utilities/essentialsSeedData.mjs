const allEssentials = [
  // 1. The "I Thought My License Was Optional" Traveler
  {
    userID: 911, // Emergency number for a reason
    travelId: {
      driversLicence: false // "Do I really need it for an international flight?"
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date('2023-01-01') // Expired 2 years ago (validation will fail)
    },
    travelDocs: ["Plane Ticket"] // One-way ticket to disappointment
  },

  // 2. The Overconfident Road Tripper
  {
    userID: 42, // Thinks he knows the answer to everything
    travelId: {
      driversLicence: true // ...but it's actually his library card
    },
    passport: {
      hasPassport: false // "We're driving to Canada, right?"
    },
    travelDocs: ["Car Rental Reservation"] // For a car they can't legally drive
  },

  // 3. The "Fake It Till You Make It" Vacationer
  {
    userID: 7, // Licensed to... improvise?
    travelId: {
      driversLicence: true // Photoshop is a skill
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date('2099-12-31') // Suspiciously far future date
    },
    travelDocs: ["Hotel Reservation", "Plane Ticket"] // Both under the name "James Bond"
  },

  // 4. The Unprepared Honeymooner
  {
    userID: 1313, // Unlucky number
    travelId: {
      driversLicence: true // But it's in their maiden name
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date() // Literally expires today ("But it's still valid!")
    },
    travelDocs: [] // "I thought YOU booked everything, honey!"
  },

  // 5. The Time Traveler (From 1999)
  {
    userID: 1999, // Back to the future
    travelId: {
      driversLicence: true // Polaroid photo laminated as ID
    },
    passport: {
      hasPassport: true,
      expirationDate: new Date('2001-01-01') // Y2K compliant!
    },
    travelDocs: ["Plane Ticket"] // Paper ticket purchased at a physical travel agency
  }
];

export default allEssentials;
