import { useFormik } from "formik";
import styles from './../styles/CommentForm.module.css'
const CommentForm = ({date_Id}) => {
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
  const formik = useFormik({
    initialValues: {
      date_Id,
      comment: '',
      date: Date.now(),
    },
    onSubmit:(values) => {
      submitComment(values);
    } 
  })
  return (
    <div className={styles.formBoxContainer}>
      <form className={`flexCentCol ${styles.formBoxContainer}`} onSubmit={formik.handleSubmit}>
      <label></label>
      <textarea className={styles.commentBox} id="commment" name="comment" onChange={formik.handleChange} value={formik.values.comment} placeholder="Enter your comment..."></textarea>
      <button type="submit">Submit Comment</button></form>
    </div>
  )
}

export default CommentForm;