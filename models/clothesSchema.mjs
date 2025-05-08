import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  tops: {
    variety: {
      longSleeve: { type: Number, default: 0 },
      shortSleeve: { type: Number, default: 0 },
      noSleeve: { type: Number, default: 0 },
      sweater: { type: Number, default: 0 },
    },
  },
  bottoms: {
    variety: {
      dress: { type: Number, default: 0 },
      shorts: { type: Number, default: 0 },
      casual: { type: Number, default: 0 },
    },
  },
  shoes: {
    variety: {
      sneakers: { type: Number, default: 0 },
      dress: { type: Number, default: 0 },
      casual: { type: Number, default: 0 },
      beach: { type: Number, default: 0 },
    },
  },
});

export default mongoose.model("Clothes", clothesSchema);
