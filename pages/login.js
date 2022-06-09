import styles from "@/styles/pages/Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.logo}>ZooHoo</div>
        <div style={{ fontSize: "1.4rem", marginTop: "10px" }}>
          Register at ZooHoo
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className={styles.loginBtn}>Login</button>
        <p>
          Don't have an account ? Click{" "}
          <Link href="register">
            <a style={{ color: "blue" }}>here to register.</a>
          </Link>
        </p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Login;
