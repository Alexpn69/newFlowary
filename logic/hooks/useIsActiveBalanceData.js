import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import getContractSigner from '@/logic/functions/getSignedContract';

import { contractSelector } from '../../store/reducers/contract/reducer';
import { CONTRACT_INSTANCE_ABI } from '@/web3/contractInstanceAbi';

export const useIsActiveBalanceData = (who) => {
  const { decimalsToken, address } = useSelector(contractSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [amountOfStream, setAmountOfStream] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const readContractInfo = async () => {
      try {
        setIsLoading(true);
        const { contract } = await getContractSigner(CONTRACT_INSTANCE_ABI, address);

        const curBalEmpl = await contract.currentBalanceEmployee(who);
        const streamInfo = await contract.getStream(who);

        const balance =
          Number(ethers.utils.formatUnits(curBalEmpl?.toString(), decimalsToken)) || 0;

        const isActiveStream = streamInfo?.active;
        const rate = Number(ethers.utils.formatUnits(streamInfo?.rate, decimalsToken));
        console.log('INFO', { balance, rate });
        setIsActive(isActiveStream);
        if (!isActiveStream) return;
        setAmountOfStream(balance);
        const id = setInterval(() => setAmountOfStream((prev) => prev + rate / 10), 100);
        setIntervalId(id);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    readContractInfo();
    return () => clearInterval(intervalId);
  }, [address, who, isActive]);

  return { setIsActive, isActive, amountOfStream, isLoading };
};
