import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Post.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { useState } from "react"; 

const Post = () => {

  const [liked, setIsliked] = useState(false);

  const likedHandler = () => {
    setIsliked(true)
  }

  const dislikeHandler = () => {
    setIsliked(false)
  }

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
          {
            liked ? <BsHeartFill onClick={dislikeHandler} /> : <AiOutlineHeart onClick={likedHandler} />
          }
           
           
          </div>
          <div className={styles.likesCount}>. 1000 likes</div>
        </div>
        <div className={styles.postCaption}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.{" "}
        </div>
        <div className={styles.postComments}>View comments...</div>
        <div className={styles.commentBox}>
          <input
            type="text"
            className={styles.commentInput}
            placeholder="Add your comment..."
          />
          <input type="button" value="Post" className={styles.commentBtn} />
        </div>
      </div>
    </div>
  );
};

export default Post;
