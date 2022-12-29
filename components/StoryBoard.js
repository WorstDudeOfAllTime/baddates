import styles from './../styles/StoryBoard.module.css';
import StoryBox from './StoryBox';
import StoryFormRedux from './StoryFormRedux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import logo from './../components/imgs/logo-no-background.png';
import Image from 'next/image';
const StoryBoard = ({
  stories,
  address,
  center,
  theLocation,
  setTheLocation,
  setTheAddress,
}) => {
  return (
    <div style={{ paddingTop: '15px' }} className={styles.storyBoardContainer}>
      <div className={`flexCent ${styles.logoBox}`}>
        <Image
          style={{
            background: 'black',
            boxShadow: '2px 2px 4px rgba(0,0,0, .8)',
          }}
          src={logo}
          alt="logo"
          height={70}
        />
      </div>
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
          />
        )}
      </div>
    </div>
  );
};

export default StoryBoard;
