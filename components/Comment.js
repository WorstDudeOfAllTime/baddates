import styles from './../styles/Comment.module.css'

const Comment = ({ story }) => {
  return (
    <div className={styles.commentBox} >
      <p>{story}</p>
    </div>
  );
};

export default Comment;
