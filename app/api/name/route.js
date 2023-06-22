import connect from "@/lib/db";
import AddressRecord from "@/lib/model";
import { NextResponse } from "next/server.js";

export const GET = async (request) => {
  try {
    await connect();

    const url = new URL(request.url);
    const name = url.searchParams.get("name");
    const data = await AddressRecord.findOne({ name });

    return new NextResponse(JSON.stringify(data));
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};
