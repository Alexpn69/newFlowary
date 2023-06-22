import { useState } from 'react';
import styles from './SubstrAddress.module.scss';
import clsx from 'clsx';

export const SubstrAddress = ({ address }) => {
  const [isCopied, setIsCopied] = useState(false);

  const truncatedWho = `${address.substr(0, 5)}...${address.substr(-4)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const wrapperClassName = clsx(styles.substrAddress, {
    [styles.copied]: isCopied,
  });

  return (
    <span onClick={copyToClipboard} className={wrapperClassName}>
      {truncatedWho}
      <span className={styles.notification}>Copied!</span>
    </span>
  );
};
