import { useState } from "react";
import getRecordByName from "../serverFunc/getRecordByName";
import connectContract from "../functions/connectContract";

export const useConnectCompany = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const handleConnectCompany = async (companyName, dispatch, router) => {
    const record = await getRecordByName(companyName);
    if (record) {
      setLoading(true);
      await connectContract(record.address, dispatch);
      router.push("/internalstaff");
      setLoading(false);
    } else {
      setText("Company with such name doesn't exist");
      setTimeout(() => setText(""), 3000);
    }
  };

  return { loading, text, handleConnectCompany };
};
