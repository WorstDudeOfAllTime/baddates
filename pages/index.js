import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import StoryBoard from '../components/StoryBoard';
export default function Home({ allLocations }) {
  const [story, setStory] = useState([]);
  const [markers, setMarkers] = useState(allLocations.data);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theAddress, setTheAddress] = useState(null);
  const [locationID, setLocationID] = useState('');
  const [theLocation, setTheLocation] = useState(null);
  const [center, setCenter] = useState({
    lat: 39.9526,
    lng: -75.1652,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Google API Test</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <SearchBar></SearchBar>
      <div className={`flexCent ${styles.contentContainer}`}>
        <div className={`flexCentCol ${styles.storyBox}`}>
          <StoryBoard
            lat={center.lat}
            lng={center.lng}
            stories={story}
            address={theAddress}
            theLocation={theLocation}
          />
        </div>
        <div className={`flexCent ${styles.mapBox}`}>
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
            />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let response = await fetch('http:/localhost:3000/api/findlocations');
  let allLocations = await response.json();
  return {
    props: { allLocations },
  };
}
