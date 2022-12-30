import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from './../styles/StoryBox.module.css'
const StoryBox = ({ story, comments }) => {
  console.log(story)
  return (
    <div className={styles.storyBox}
      style={{ height: '90%', width: '90%', borderBottom: '2px solid black' }}
    >
      {story && <p className={styles.theStory} style={{ color: 'black' }}>{story.story}</p>}
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
        <CommentForm />
    </div>
  );
};

export default StoryBox;
