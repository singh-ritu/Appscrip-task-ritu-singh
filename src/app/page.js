import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
