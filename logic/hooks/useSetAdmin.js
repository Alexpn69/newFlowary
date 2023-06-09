import { useState } from 'react';
import { contractSelector, setAdmin } from '@/store/reducers/contract/reducer';
import { useDispatch, useSelector } from 'react-redux';
import connectContract from '../functions/connectContract';
import { useRouter } from 'next/navigation';
import usePrepareCompanyContract from './usePrepareCompanyContract';

const useSetAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');
  const { address } = useSelector(contractSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const { signedCompanyContract } = usePrepareCompanyContract();

  const handleSetAdmin = async (adminAddress) => {
    try {
      setIsLoading(true);
      setNotif('');
      const tx = await signedCompanyContract.changeAdmin(adminAddress);
      await tx.wait();
      dispatch(setAdmin(adminAddress));
      await connectContract(address, dispatch);
      router.push('/overview');
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSetAdmin, isLoading, notif };
};

export default useSetAdmin;
