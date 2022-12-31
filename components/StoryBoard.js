import styles from './../styles/StoryBoard.module.css';
import StoryBox from './StoryBox';
import StoryFormRedux from './StoryFormRedux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import logo from './../components/imgs/logo-no-background.png';
import Image from 'next/image';
const StoryBoard = ({
  address,
  center,
  theLocation,
  setTheLocation,
  setTheAddress,
}) => {
  return (
    <div style={{ paddingTop: '15px' }} className={styles.storyBoardContainer} key={'board-story-x'}>
      <div className={`flexCent ${styles.logoBox}`}>
        <Image
          style={{
            background: 'black',
            boxShadow: '2px 2px 4px rgba(0,0,0, .8)',
          }}
          src={logo}
          alt="logo"
          width={200}
        />
      </div>
      <div key={'board-where-x'} className={`flexCentCol ${styles.whereBox}`} >
          <p style={{ marginLeft: '5px' }}>{address}</p>
      </div>
      <div key={'board-story-x'} className={styles.storyBox}>
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
