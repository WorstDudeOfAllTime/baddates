import uniqueString from 'unique-string';
import { useState } from 'react';
import styles from './../styles/StoryFormRedux.module.css';
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
    <div style={{ height: '100%', width: '100%', marginTop: '15px' }}>
      <form
        className={`flexCentCol ${styles.theForm}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {theLocation === null ? (
          <>
            <input
              placeholder="Enter Place"
              className={styles.inputs}
              style={{
                width: '90%',
                height: 'auto',
                fontSize: '16px',
              }}
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
        <textarea
          placeholder="Enter Your Story"
          className={styles.inputs}
          style={{
            height: '60%',
            width: '90%',
            fontSize: '16px',
            borderRadius: '0px',
          }}
          id="story"
          name="story"
          onChange={(e) => {
            setStory(e.target.value);
          }}
          value={story}
        ></textarea>
        <button className={styles.buttons} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StoryFormRedux;
