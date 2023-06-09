import { useState } from 'react';
import getRecordByName from '../serverFunc/getRecordByName';
import connectContract from '../functions/connectContract';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { usePathname } from 'next/navigation';

export const useConnectCompany = () => {
  const pathname = usePathname();
  const { name } = useSelector(contractSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');

  const handleConnectCompany = async (companyName, dispatch, router) => {
    setNotif('');

    if (name === companyName && pathname !== '/') {
      setNotif("You are already on this company's page!");
      return false;
    }

    try {
      setIsLoading(true);
      const record = await getRecordByName(companyName);
      if (record) {
        await connectContract(record.address, dispatch);
        router.push('/overview');
        setNotif('Success!');
        return true;
      } else {
        setNotif("Company with such name doesn't exist");
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
    return false;
  };

  return { isLoading, notif, handleConnectCompany };
};
