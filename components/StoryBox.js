import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from './../styles/StoryBox.module.css';
import { useEffect, useState } from 'react';
const StoryBox = ({ story }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      let commentResponse = await fetch('/api/findcomments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date_Id: `${story.date_Id}`,
        }),
      });
      let commentData = await commentResponse.json();
      console.log(`comment Data: ${commentData}`);
      setComments((prevComments) => {
        return [...prevComments, commentData];
      });
    } catch (err) {}
  };
  return (
    <div
      className={styles.storyBox}
      style={{ height: '90%', width: '90%', borderBottom: '2px solid black' }}
    >
      {story && (
        <>
          <h6 style={{ margin: '3px' }}>{story.date.slice(0, 10)}</h6>
          <p className={styles.theStory} style={{ color: 'black' }}>
            {story.story}
          </p>
        </>
      )}
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      <CommentForm date_Id={story && story.date_Id} />
    </div>
  );
};

export default StoryBox;
