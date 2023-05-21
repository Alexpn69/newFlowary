import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Link href="./Overview" className={styles.links}>
        <span>Start</span>
      </Link>
    </>
  );
}
