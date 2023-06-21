import connect from "@/lib/db";
import AddressRecord from "@/lib/model";
import { NextResponse } from "next/server.js";

export const GET = async () => {
  try {
    await connect();
    const data = await AddressRecord.find();

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const record = new AddressRecord(body);

  try {
    await connect();

    await record.save();

    return new NextResponse({ record });
  } catch (error) {
    return new NextResponse("Database Error", { error: error.message });
  }
};
