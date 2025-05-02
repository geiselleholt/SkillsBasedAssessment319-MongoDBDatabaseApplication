const allClothes = [
  // 1. The "Laundry Day Crisis" outfit
  {
    userID: "680fe1d53faad97bec992f3c", // The answer to life, the universe, and laundry
    tops: {
      variety: {
        longSleeve: 0,
        shortSleeve: 0,
        noSleeve: 1, // Wearing a bathrobe as a top
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 0,
        shorts: 1, // Christmas pajama shorts in July
        casual: 0,
      },
    },
    shoes: {
      variety: {
        sneakers: 0,
        dress: 0,
        casual: 1, // Mismatched slippers
        beach: 0,
      },
    },
  },

  // 2. The "Accidental Fashion Disaster"
  {
    userID: "680fe1d53faad97bec992f3f", // Error: Style not found
    tops: {
      variety: {
        longSleeve: 1, // Striped business shirt
        shortSleeve: 0,
        noSleeve: 0,
        sweater: 1, // Ugly Christmas sweater (in June)
      },
    },
    bottoms: {
      variety: {
        dress: 0,
        shorts: 1, // Gym shorts
        casual: 0,
      },
    },
    shoes: {
      variety: {
        sneakers: 1, // One white, one black
        dress: 0,
        casual: 0,
        beach: 0,
      },
    },
  },

  // 3. The "I WFH and Nobody Can Stop Me" Collection
  {
    userID: "680fe1d53faad97bec992f40", // Elite hacker attire
    tops: {
      variety: {
        longSleeve: 0,
        shortSleeve: 1, // Same Zoom shirt for 3 days
        noSleeve: 0,
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 0,
        shorts: 0,
        casual: 1, // Pajama pants with tacos print
      },
    },
    shoes: {
      variety: {
        sneakers: 0,
        dress: 0,
        casual: 0,
        beach: 1, // Fuzzy bunny slippers
      },
    },
  },

  // 4. The "Dressed by a Colorblind Toddler"
  {
    userID: 777, // Lucky? Not for fashion
    tops: {
      variety: {
        longSleeve: 1, // Polka dots
        shortSleeve: 1, // Horizontal stripes (worn underneath)
        noSleeve: 0,
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 1, // Worn as a skirt over pants
        shorts: 0,
        casual: 1, // Plaid pants
      },
    },
    shoes: {
      variety: {
        sneakers: 1, // Neon green
        dress: 1, // Formal oxfords (different colors)
        casual: 0,
        beach: 0,
      },
    },
  },

  // 5. The "Emergency Clothing Situation"
  {
    userID: "680fe1d53faad97bec992f3e", // Fashion emergency
    tops: {
      variety: {
        longSleeve: 0,
        shortSleeve: 0,
        noSleeve: 1, // Beach towel safety-pinned as a toga
        sweater: 0,
      },
    },
    bottoms: {
      variety: {
        dress: 1, // Curtains repurposed as a toga
        shorts: 0,
        casual: 0,
      },
    },
    shoes: {
      variety: {
        sneakers: 0,
        dress: 0,
        casual: 0,
        beach: 1, // Bread bags secured with rubber bands
      },
    },
  },
];

export default allClothes;
