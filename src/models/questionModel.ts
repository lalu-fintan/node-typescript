import mongoose, { Schema } from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      unique: true,
    },

    answers: [
      {
        option: {
          type: String,
          required: true,
        },
        mark: {
          type: Number,
          required: true,
        },
      },
    ],
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Questions", questionSchema);
