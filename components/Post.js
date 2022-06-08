import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Post.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.profilePic}>
          <div style={{ width: "38px", height: "38px", position: "relative" }}>
            <Image
              alt="pp"
              src="/pp.jpeg"
              layout="fill"
              objectFit="contain"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className={styles.username}>
          <Link href="#">
            <a>Username</a>
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Image
          alt="Mountains"
          src="/demo.jpg"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={styles.postFooter}>
        <div className={styles.likesContainer}>
          <div className={styles.likeButton}>
            <AiOutlineHeart />
          </div>
          <div className={styles.likesCount}>
            . 1000 likes
          </div>
        </div>
        <div className={styles.postCaption}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.postComments}>View comments...</div>
      </div>
    </div>
  );
};

export default Post;
