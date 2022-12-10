import Comment from "./Comment";
const StoryBox = ({story, comments}) => {
  return (
    <div>
      <p>{story}</p>
      {comments && comments.map(comment => {
        return <Comment comment={comment}/>
      })}
    </div>

  )
}

export default StoryBox;