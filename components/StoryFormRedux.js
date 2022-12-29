import uniqueString from 'unique-string';
import { useState } from 'react';
import styles from './../styles/StoryFormRedux.module.css'
const StoryFormRedux = ({
  theLocation,
  center,
  setTheLocation,
  setTheAddress,
}) => {
  const [story, setStory] = useState('');
  const [place, setPlace] = useState('');
  console.log(theLocation);
  const submitStory = async (values) => {
    try {
      const data = await fetch('/api/writedate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const submitLocation = async (values) => {
    try {
      const data = await fetch('/api/writelocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = () => {
    let values = {
      location: !theLocation ? place : theLocation.location,
      location_Id: !theLocation ? uniqueString() : theLocation.location_Id,
      date_Id: uniqueString(),
      lat: center.lat,
      lng: center.lng,
      date: Date.now(),
      story,
    };
    if (theLocation) {
      submitStory(values);
    } else {
      submitStory(values);
      submitLocation(values);
    }
    setTheLocation(null);
    setTheAddress(null);
  };
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <form
        className={'flexCentCol'}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {theLocation === null ? (
          <>
            <label className={styles.labels} style={{ width: '90%' }} htmlFor="location">
              Enter Place
            </label>
            <input
            className={styles.inputs}
            style={{width: '90%', height:'auto', fontSize:'20px'}}
              type="text"
              name="location"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
              value={place}
            ></input>
          </>
        ) : (
          <></>
        )}
        <label className={styles.labels} style={{ width: '90%' }} htmlFor="story">
          Enter your Story
        </label>
        <textarea
        className={styles.inputs}
          style={{ height: '200px', width: '90%', fontSize: '17px' }}
          id="story"
          name="story"
          onChange={(e) => {
            setStory(e.target.value);
          }}
          value={story}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryFormRedux;
