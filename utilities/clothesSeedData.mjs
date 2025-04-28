const allClothes = [
  // 1. Business traveler
  {
    userID: 1001,
    tops: {
      variety: {
        longSleeve: 3, // Dress shirts
        shortSleeve: 2, // Polos
        noSleeve: 0,
        sweater: 1, // Cardigan
      },
    },
    bottoms: {
      variety: {
        dress: 2, // Slacks
        shorts: 0,
        casual: 1, // Khakis
      },
    },
    shoes: {
      variety: {
        sneakers: 1, // For walking
        dress: 2, // Oxfords/loafers
        casual: 0,
        beach: 0,
      },
    },
  },

  // 2. Beach vacationer
  {
    userID: 1002,
    tops: {
      variety: {
        longSleeve: 1, // Cover-up
        shortSleeve: 5, // T-shirts
        noSleeve: 3, // Tank tops
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 0,
        shorts: 4,
        casual: 2, // Lightweight pants
      },
    },
    shoes: {
      variety: {
        sneakers: 1,
        dress: 0,
        casual: 1, // Sandals
        beach: 1, // Flip flops
      },
    },
  },

  // 3. Winter traveler
  {
    userID: 1003,
    tops: {
      variety: {
        longSleeve: 4, // Thermal shirts
        shortSleeve: 0,
        noSleeve: 0,
        sweater: 3, // Wool sweaters
      },
    },
    bottoms: {
      variety: {
        dress: 2, // Winter pants
        shorts: 0,
        casual: 2, // Fleece-lined
      },
    },
    shoes: {
      variety: {
        sneakers: 0,
        dress: 1, // Leather boots
        casual: 2, // Winter boots
        beach: 0,
      },
    },
  },

  // 4. Minimalist packer
  {
    userID: 1004,
    tops: {
      variety: {
        longSleeve: 2, // Versatile shirts
        shortSleeve: 2,
        noSleeve: 0,
        sweater: 1, // All-purpose
      },
    },
    bottoms: {
      variety: {
        dress: 1, // Convertible pants
        shorts: 1,
        casual: 1,
      },
    },
    shoes: {
      variety: {
        sneakers: 1, // All-day walking
        dress: 0,
        casual: 1, // Multi-use
        beach: 0,
      },
    },
  },

  // 5. Festival attendee
  {
    userID: 1005,
    tops: {
      variety: {
        longSleeve: 1, // For cool nights
        shortSleeve: 3,
        noSleeve: 4, // Crop tops/bralettes
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 2, // Sundresses
        shorts: 3,
        casual: 1, // Jeans
      },
    },
    shoes: {
      variety: {
        sneakers: 1, // Comfort
        dress: 0,
        casual: 2, // Stylish sandals
        beach: 1, // For water areas
      },
    },
  },
];

export default allClothes;
