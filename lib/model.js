import mongoose from "mongoose";

const Schema = mongoose.Schema;
const addressRecord = new Schema({
  name: String,
  address: String,
});
const AddressRecord = new mongoose.model("AddressRecord", addressRecord);

export default AddressRecord;
