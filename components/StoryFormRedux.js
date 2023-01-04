import uniqueString from 'unique-string';
import { useEffect, useState } from 'react';
import styles from './../styles/StoryFormRedux.module.css';
const StoryFormRedux = ({
  theLocation,
  center,
  setTheLocation,
  setTheAddress,
}) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [story, setStory] = useState('');
  const [place, setPlace] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage('')
    }, 4000)
  }, successMessage)
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
    <div className={styles.formWrapper}>
      <form
        className={`flexCentCol ${styles.theForm}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setSuccessMessage('Story Submitted!')
        }}
      >
        {theLocation === null ? (
          <>
            <input
              placeholder="Enter Place"
              className={styles.inputs}
              type="text"
              name="location"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
              value={place}
              required={true}
            ></input>
          </>
        ) : (
          <></>
        )}
        <textarea
          placeholder="Enter Your Story"
          className={`${styles.inputs} ${styles.storyIn}`}
          id="story"
          name="story"
          onChange={(e) => {
            setStory(e.target.value);
          }}
          value={story}
          required={true}
        ></textarea>
        <button className={styles.buttons} type="submit">
          Submit
        </button>
      </form>
      <p>{successMessage}</p>
    </div>
  );
};

export default StoryFormRedux;
