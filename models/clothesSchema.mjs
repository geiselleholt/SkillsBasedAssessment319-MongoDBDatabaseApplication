import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  tops: {
    // required: true,
    variety: {
      longSleeve: Number,
      shortSleeve: Number,
      noSleeve: Number,
      sweater: Number,
    },
  },
  bottoms: {
    // required: true,
    variety: {
      dress: Number,
      shorts: Number,
      casual: Number,
    },
  },
  shoes: {
    // required: true,
    variety: {
      sneakers: Number,
      dress: Number,
      casual: Number,
      beach: Number,
    },
  },
  shoes: {
    // required: true,
    variety: {
      sneakers: Number,
      dress: Number,
      casual: Number,
      beach: Number,
    },
  },
});

export default mongoose.model("Clothes", clothesSchema);
