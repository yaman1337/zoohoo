import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link href="">ZooHoo</Link>
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/chats">
          <a className={styles.navLink}>Chats</a>
        </Link>
        <Link href="/notifications">
          <a className={styles.navLink}>Notifications</a>
        </Link>
        <Link href="/profile">
          <a className={styles.navLink}>Profile</a>
        </Link>
      </div>
    </div>
  );
}
