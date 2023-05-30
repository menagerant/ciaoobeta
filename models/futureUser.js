import { Schema, model, models } from "mongoose";

const FutureUserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
});

const FutureUser = models.FutureUser || model("FutureUser", FutureUserSchema);

export default FutureUser;
