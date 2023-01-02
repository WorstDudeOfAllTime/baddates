import styles from './../styles/StoryBoard.module.css';
import StoryBox from './StoryBox';
import StoryFormRedux from './StoryFormRedux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import logo from './../components/imgs/logo-no-background.png';
import Image from 'next/image';
import { Fredoka_One } from '@next/font/google';
const fred = Fredoka_One({
  weight: '400',
  subsets: ['latin'],
});
const StoryBoard = ({
  address,
  center,
  theLocation,
  setTheLocation,
  setTheAddress,
}) => {
  return (
    <div
      style={{ paddingTop: '15px' }}
      className={styles.storyBoardContainer}
      key={'board-story-x'}
    >
      <div className={styles.theBox}>
        <div className={`flexCent ${styles.logoBox}`}>
          <Image
            style={{
              background: 'black',
              boxShadow: '2px 2px 4px rgba(0,0,0, .8)',
              height: 'auto',
              width: '100%',
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <div
          key={'board-where-x'}
          className={`flexCentCol ${fred.className} ${styles.whereBox}`}
        >
          <h2 style={{ marginLeft: '5px' }}>{address}</h2>
        </div>
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
