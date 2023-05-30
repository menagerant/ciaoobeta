import { Int32 } from "mongodb";
import { Schema, model, models } from "mongoose";

const CurrencySchema = new Schema({
  code: {
    type: String,
    required: [true, "Code is required."],
  },
  symbol: {
    type: String,
    required: [true, "Symbol is required."],
  },
  thousandsSeparator: {
    type: String,
    required: [true, "ThousandsSeparator is required."],
  },
  decimalSeparator: {
    type: String,
    required: [true, "DecimalSeparator is required."],
  },
  symbolOnLeft: {
    type: Boolean,
    required: [true, "SymbolOnLeft is required."],
  },
  spaceBetweenAmountAndSymbol: {
    type: Boolean,
    required: [true, "SpaceBetweenAmountAndSymbol is required."],
  },
  decimalDigits: {
    type: Number,
    required: [true, "DecimalDigits is required."],
  },
});

const Currency = models.Currency || model("Currency", CurrencySchema);

export default Currency;
