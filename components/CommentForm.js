import styles from './../styles/CommentForm.module.css';
import {useState} from 'react';

const CommentForm = ({ date_Id, location }) => {
  const [comment, setComment] = useState('')
  const submitComment = async (values) => {
    try {
      const data = await fetch('/api/writecomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (comment, date_Id, location) => {
    const commentObj = {
      date: Date.now(),
      date_Id,
      location_Id: location,
      comment
    }
    submitComment(commentObj);
  }
  return (
    <div className={styles.formBoxContainer}>
      <form
        className={`flexCentCol ${styles.formBoxContainer}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(comment, date_Id, location);
        }}
      >
        {' '}
        <textarea
          className={styles.commentBox}
          id="commment"
          name="comment"
          onChange={(e)=>{
            setComment(e.target.value);
          }}
          value={comment}
          placeholder="Enter your comment"
        ></textarea>
        <button className={styles.buttons} type="submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
