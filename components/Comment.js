import styles from './../styles/Comment.module.css';
const Comment = ({ comment }) => {
  return (
    <div className={` ${styles.commentBox}`}>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
