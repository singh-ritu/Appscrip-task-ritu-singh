import styles from "./page.module.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Products from "./components/product";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Header />
        <Navbar />
      </header>
      <main className={styles.main}>
        <Products />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
