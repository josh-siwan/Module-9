const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  textField: { type: String,required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comments", commentSchema);