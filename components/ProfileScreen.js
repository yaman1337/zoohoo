import styles from "@/styles/components/ProfileScreen.module.css";
import Image from "next/image";
import Post from "./Post";
import CreatePostForm from "./CreatePostForm";

const ProfileCard = () => {
  return (
    <div className={styles.profileScreen}>
      <div className={styles.userDetails}>
        <div className={styles.profilePic}>
          <Image
            layout="fill"
            src="/pp.jpeg"
            alt="pp"
            style={{ borderRadius: "50%" }}
          ></Image>
        </div>

        <div className={styles.userIntroduction}>
          <b>Username: yaman1337</b>
          <b>Fullname: Yaman Sarabariya</b>
          <b>Email: yaman.sarabariya@gmail.com</b>
          <b style={{borderBottom: "1px solid lightgray"}}>DOB: 2003-12-23</b>
          <b style={{fontWeight: "400"}}>Follower: 100M</b>
          <b style={{fontWeight: "400"}}>Following: 0</b>
        </div>

        <div className={styles.actionButtons}>
          <p>Profile Actions</p>
          <div style={{display: "flex"}}>
          <button style={{marginRight: "5px", background: "rgb(41, 187, 255)", color: "white"}}>View Followers</button>
          <button>View Following</button>
          </div>
          <button>Change Username</button>
          <button>Change Email</button>
          <button className={styles.deleteAccountBtn}>Delete Account</button>

        </div>
  
      </div>
      <div className={styles.userPosts}>
      <CreatePostForm />
      <Post />
      <Post />

      <Post />

      </div>
    </div>
  );
};

export default ProfileCard;
