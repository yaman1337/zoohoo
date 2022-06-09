import styles from "@/styles/components/CreatePostForm.module.css";

const CreatePostForm = () => {
  return (
    <div className={styles.createPostForm}>
      <textarea
        name="caption"
        id="caption"
        style={{
          width: "100%",
          resize: "none",
          height: "100px",
          marginBottom: "5px",
        }}
        placeholder="Enter caption"
      ></textarea>
      <label htmlFor="photo">Upload pic:&nbsp;&nbsp;&nbsp;</label>
      <input type="file" name="photo" id="photo" z />
      <br />
      <button className={styles.uploadBtn}>Upload</button>
    </div>
  );
};

export default CreatePostForm;
