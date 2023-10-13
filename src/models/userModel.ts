import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    fistname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["superAdmin", "subAdmin", "client", "user"],
      default: "user",
    },

    refreshToken: String,
  },
  { timestamps: true }
);

//Export the model
export default mongoose.model("User", userSchema);
