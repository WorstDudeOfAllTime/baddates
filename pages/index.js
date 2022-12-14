import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Map from '../components/Map';
import StoryBoard from '../components/StoryBoard';
import StoryBox from '../components/StoryBox';
import StoryFormRedux from '../components/StoryFormRedux';
import Disclaimer from '../components/Disclaimer';
import { getLocations } from './api/findlocations';
import { Fredoka_One } from '@next/font/google';
const fred = Fredoka_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home({ allLocations }) {
  const [story, setStory] = useState(null);
  const [markers, setMarkers] = useState(JSON.parse(allLocations));
  const [isLoaded, setIsLoaded] = useState(false);
  const [theAddress, setTheAddress] = useState(null);
  const [locationID, setLocationID] = useState('');
  const [theLocation, setTheLocation] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [ready, setReady] = useState(false);
  const [center, setCenter] = useState({
    lat: 39.9526,
    lng: -75.1652,
  });
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>BadDates</title>
      </Head>
      {ready ? (
        <div className={`flexCent ${styles.contentContainer}`}>
          <div className={`flexCent ${styles.mapBox}`}>
            <div className={styles.storyBox}>
              <StoryBoard
                center={center}
                stories={story}
                address={theAddress}
                setTheAddress={setTheAddress}
                theLocation={theLocation}
                setTheLocation={setTheLocation}
              >
                <StoryFormRedux />
              </StoryBoard>
            </div>
            <div className={styles.theMap}>
              {isLoaded ? (
                <h1 style={{ fontSize: '100px' }}>LOADING</h1>
              ) : (
                <Map
                  center={center}
                  setCenter={setCenter}
                  data={markers}
                  setStory={setStory}
                  setLocationID={setLocationID}
                  setTheAddress={setTheAddress}
                  setTheLocation={setTheLocation}
                  setCommentList={setCommentList}
                />
              )}
            </div>

            <div
              className={`flexCentCol ${fred.className} ${styles.storyArea}`}
            >
              <h2>Stories</h2>
              <div className={`flexCentCol ${styles.storyBill}`}>
                {story &&
                  story
                    .sort((a, b) => {
                      var c = new Date(a.date);
                      var d = new Date(b.date);
                      return d - c;
                    })
                    .map((theStory) => {
                      return (
                        <StoryBox
                          key={`x${Math.floor(
                            Math.random() * 1000
                          ).toString()}x0x`}
                          story={theStory}
                          comments={commentList}
                        />
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Disclaimer setReady={setReady} />
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await getLocations();
  const allLocations = await JSON.stringify(response);
  return {
    props: { allLocations },
  };
}
