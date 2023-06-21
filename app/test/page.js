// "use client";
//import getRecordTest from "@/logic/serverFunc/getRecordTest";

import GetName from "./getName";

async function getData() {
  const res = await fetch("http://localhost:3000/api/data", {
    // cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Test = async () => {
  const data = await getData();

  return (
    <>
      {/* <button onClick={getRecordTest}>GET</button> */}
      <div>LENGTH:{data.length}</div>
      <GetName />
    </>
  );
};

export default Test;
