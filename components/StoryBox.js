import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from './../styles/StoryBox.module.css';
import { useEffect, useState } from 'react';
const StoryBox = ({ story, comments }) => {
  console.log(story);
  return (
    <div
      className={`${styles.storyBox}`}
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
      {story && comments &&
        comments
          .filter((comment) => {
            if (comment.date_Id === story.date_Id) {
              return comment;
            }
          })
          .map((comment) => {
            return <Comment comment={comment} />;
          })}
      <CommentForm
        date_Id={story && story.date_Id}
        location={story && story.location_Id}
      />
    </div>
  );
};

export default StoryBox;
