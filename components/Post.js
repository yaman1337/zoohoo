import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.profilePic}>
        <div style={{ width: "38px", height: "38px",position: "relative" }}>
        <Image
          alt="pp"
          src="/pp.jpeg"
          layout="fill"
          objectFit="contain"
          style={{borderRadius: "50%"}}
        />
      </div>
        </div>
        <div className={styles.username}>
          <Link href="#">
            <a>Username</a>
          </Link>
        </div>
      </div>

      <div style={{ width: "100%", height: "500px", position: "relative" }}>
        <Image
          alt="Mountains"
          src="/demo.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Post;
