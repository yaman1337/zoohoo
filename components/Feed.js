import styles from "@/styles/components/Feed.module.css";
import Post from "./Post";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.posts}>
        <Post />
      </div>
    </div>
  );
};

export default Feed;
