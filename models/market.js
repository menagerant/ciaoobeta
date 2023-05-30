import { Schema, model, models } from "mongoose";

const MarketSchema = new Schema({
  code: {
    type: String,
    required: [true, "Code is required."],
  },
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  currency: {
    type: String,
    required: [true, "Currency is required."],
  },
});

const Market = models.Market || model("Market", MarketSchema);

export default Market;
