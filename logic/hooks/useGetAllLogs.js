'use client';
import { useState, useEffect } from 'react';
import getContractSigner from '../functions/getSignedContract';
import { CONTRACT_INSTANCE_ABI } from '../../web3/contractInstanceAbi';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';

const useGetAllLogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');
  const [arrayBlock, setArrayBlock] = useState([]);
  const { address, decimalsToken } = useSelector(contractSelector);

  useEffect(() => {
    setNotif('');
    setIsLoading(true);
    const getAllLogs = async () => {
      try {
        const { contract } = await getContractSigner(CONTRACT_INSTANCE_ABI, address);
        const result = [];
        const numActive = (await contract.amountActiveStreams()).toNumber();
        if (numActive > 0) {
          for (let i = 0; i < numActive; i++) {
            const addressEmployee = await contract.activeStreamAddress(i);
            const timeStarted = await contract.getStream(addressEmployee);
            const obj = {
              name: 'Active',
              addr: addressEmployee,
              time: timeStarted.startAt.toNumber(), //startedAt
            };
            result.push(obj);
          }
        }
        const eventFinish = await contract.queryFilter(contract.filters.StreamFinished());
        for (let i = 0; i < eventFinish.length; i++) {
          const addressEmployee = eventFinish[i].args[0];
          const startTime = eventFinish[i].args[3].toNumber();
          const finishTime = eventFinish[i].args[2].toNumber();
          let arrDecimals = [1];
          for (let i = 0; i < decimalsToken; i++) {
            const zero = '0';
            arrDecimals.push(zero);
          }
          const decimal = +arrDecimals.join('');
          const earnedTokens = (eventFinish[i].args[1] / decimal).toString();
          const txHash = eventFinish[i].transactionHash;
          const obj = {
            name: 'Finished',
            addr: addressEmployee,
            startAt: startTime,
            time: finishTime, //endeddAt
            earned: earnedTokens,
            txHash: txHash,
          };
          result.push(obj);
        }
        result.sort((a, b) => a.time - b.time);
        setArrayBlock(result);
      } catch (error) {
        console.error('An error occurred:', error);
        setNotif('An error occurred!');
      } finally {
        setIsLoading(false);
      }
    };
    getAllLogs();
  }, [address, decimalsToken]);

  return { isLoading, arrayBlock, notif };
};

export default useGetAllLogs;
