import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    match: [
      /^[a-zA-Z0-9]+$/,
      "Username can only contain alphanumeric characters",
    ],
    unique: [true, "Username already exists"],
  },
  image: {
    type: String,
  },
});

export default models.User || model("User", UserSchema);
