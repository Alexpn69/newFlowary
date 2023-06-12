// import { connect } from "mongoose";
// import { AddressRecord } from "../db/record.js";
import { NextResponse } from "next/server.js";
// import mongoose from "mongoose";
// import connectDB from "../db/mongoose";

// export default async function handler(req, res) {
//   await connect();

//   const addresses = await AddressRecord.find({});

//   res.json(addresses);
// }
export async function GET(req) {
  // await connectDB();

  return NextResponse.json({ message: "fucking shit" });
}
