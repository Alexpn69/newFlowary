import connect from "@/lib/db";
import AddressRecord from "@/lib/model";
// import mongoose from "mongoose";
import { NextResponse } from "next/server.js";

// const Schema = mongoose.Schema;
// const addressRecord = new Schema({
//   name: String,
//   address: String,
// });
// const AddressRecord = new mongoose.model("AddressRecord", addressRecord);

export const GET = async () => {
  try {
    await connect();
    const data = await AddressRecord.find();

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};
