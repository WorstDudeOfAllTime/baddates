import Comment from './Comment';
import CommentForm from './CommentForm';
const StoryBox = ({ story, comments }) => {
  return (
    <div
      style={{ height: 'auto', width: '90%', borderBottom: '2px solid white' }}
    >
      {story && <p style={{ color: 'white' }}>{story.story}</p>}
      {comments &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
        <CommentForm />
    </div>
  );
};

export default StoryBox;
