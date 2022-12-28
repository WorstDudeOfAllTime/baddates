import styles from './../styles/StoryBoard.module.css';
import StoryBox from './StoryBox';
import StoryForm from './StoryForm';
import StoryFormRedux from './StoryFormRedux';
import Comment from './Comment';
import CommentForm from './CommentForm';
const StoryBoard = ({ stories, address, center, theLocation, setTheLocation, setTheAddress, lat, lng }) => {
  return (
    <div className={styles.storyBoardContainer}>
      <div className={`flexCentCol ${styles.whereBox}`}>
        <h2>Location</h2>
        <div className={styles.locationBox}>
          <p style={{ marginLeft: '5px' }}>{address}</p>
        </div>
      </div>
      <div className={styles.storyBox}>
        <div className={styles.storyList}>
          {stories &&
            stories.map((story) => {
              return <StoryBox story={story} />;
            })}
        </div>
        {address != null && (
          <StoryFormRedux
            center={center}
            theLocation={theLocation}
            setTheLocation={setTheLocation}
            setTheAddress={setTheAddress}
            lat={lat}
            lng={lng}
          />
        )}
      </div>
    </div>
  );
};

export default StoryBoard;
