import styles from './../styles/StoryBoard.module.css'
const StoryBoard = ({story, address}) => {
  return (
    <div className={styles.storyBoardContainer}>
      <div className={`flexCentCol ${styles.whereBox}`}>
        <h2>Location</h2>
        <div className={styles.locationBox}>
          <p style={{'margin-left': '5px'}}>{address}</p>
        </div>
      </div>
      <div className={styles.storyBox}>
        <p>{story}</p>
      </div>
    </div>
  )
}

export default StoryBoard;