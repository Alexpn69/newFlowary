import connectContract from "@/logic/functions/connectContract";
import { useState } from "react";

export const useConnectDemo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConnectDemo = async (dispatch, router) => {
    setIsLoading(true);
    await connectContract(
      "0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a",
      dispatch
    );
    router.push("/overview");
    setIsLoading(false);
  };

  return { isLoading, handleConnectDemo };
};
