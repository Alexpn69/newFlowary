// import connect from "@/lib/db";
// import AddressRecord from "@/lib/model";
// import { NextResponse } from "next/server.js";

// export const GET = async (req) => {
//   try {
//     await connect();

//     const name = req.query.name;
//     console.log(name);
//     const record = await AddressRecord.findOne({ name });
//     if (!record) {
//       return new NextResponse({ error: "Ничего не найдено" });
//     }
//     return new NextResponse({ record });
//   } catch (error) {
//     console.error(error);
//     // res.status(404).send(error);
//   }
// };
