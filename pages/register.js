import styles from "@/styles/pages/Register.module.css";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.logo}>ZooHoo</div>
        <div style={{ fontSize: "1.4rem", marginTop: "10px" }}>
          Login to your ZooHoo account
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              width: "90%",
              position: "relative",
            }}
          >
            DOB:&nbsp;
            <input type="date" name="dob" id="dob" />
          </span>
          <input type="password" placeholder="Password" />
          <span style={{ display: "flex" }}>
            {" "}
            Pfp:&nbsp;&nbsp;
            <input
              type="file"
              name="profilePic"
              id="profilePic"
              accept="image/png, image/jpeg"
            />
          </span>
        </div>
        <button className={styles.registerBtn}>Resgiter</button>
        <p>
          Already have an account ? Click{" "}
          <Link href="login">
            <a style={{ color: "blue" }}>here to login.</a>
          </Link>
        </p>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Register;
