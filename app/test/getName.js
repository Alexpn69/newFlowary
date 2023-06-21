"use client";

import getRecordTest from "@/logic/serverFunc/getRecordTest";
import postRecordTest from "@/logic/serverFunc/postRecordTest";

const GetName = () => {
  return (
    <>
      <form onSubmit={getRecordTest}>
        <input type="text" required />
        <button>GET</button>
      </form>

      <form onSubmit={postRecordTest}>
        <input type="text" required />
        <input type="text" required />
        <button>POST</button>
      </form>
    </>
  );
};

export default GetName;
