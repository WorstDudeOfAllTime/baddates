import styles from './../styles/StoryBoard.module.css';
import StoryBox from './StoryBox';
import StoryForm from './StoryForm';
const StoryBoard = ({ stories, address }) => {
  return (
    <div className={styles.storyBoardContainer}>
      <div className={`flexCentCol ${styles.whereBox}`}>
        <h2>Location</h2>
        <div className={styles.locationBox}>
          <p style={{ marginLeft: '5px' }}>{address}</p>
        </div>
      </div>
      <div className={styles.storyBox}>
        {stories &&
          stories.map((story) => {
            return <StoryBox story={story} />;
          })}
        {address != null && <StoryForm address={address} />}
      </div>
    </div>
  );
};

export default StoryBoard;
