import styles from './../styles/CommentForm.module.css';
import penIcon from './imgs/penicon.png';
import Image from 'next/image';
import {useState} from 'react';

const CommentForm = ({ date_Id }) => {
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

  const handleSubmit = (comment, date_Id) => {
    const commentObj = {
      date: Date.now(),
      date_Id,
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
          handleSubmit(comment, date_Id);
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
