import connectContract from '@/logic/functions/connectContract';
import { useState } from 'react';

export const useConnectDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');
  const handleConnectDemo = async (dispatch, router) => {
    try {
      setNotif('');
      setIsLoading(true);
      await connectContract('0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a', dispatch);
      router.push('/overview');
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, notif, handleConnectDemo };
};
