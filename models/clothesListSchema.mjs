import mongoose from "mongoose";

const clothesListSchema = new mongoose.Schema({
  tops: {
    required: true,
    variety: {
      longSleeve: Number,
      shortSleeve: Number,
      noSleeve: Number,
      sweater: Number,
    },
  },
  bottoms: {
    required: true,
    variety: {
      dress: Number,
      shorts: Number,
      casual: Number,
    },
  },
  shoes: {
    required: true,
    variety: {
      sneakers: Number,
      dress: Number,
      casual: Number,
      beach: Number,
    },
  },
  shoes: {
    required: true,
    variety: {
      sneakers: Number,
      dress: Number,
      casual: Number,
      beach: Number,
    },
    },
    descrition: String,
});

export default mongoose.model("Mammal", mammalSchema);
