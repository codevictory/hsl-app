import { Search } from '@/components/Search';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Search processEnv={process.env} />
    </main>
  );
}
