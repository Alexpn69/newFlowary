import mongoose from "mongoose";
const { Schema } = mongoose;

const addressRecord = new Schema({
  name: String,
  address: String,
});

export const AddressRecord = new mongoose.model("AddressRecord", addressRecord);
