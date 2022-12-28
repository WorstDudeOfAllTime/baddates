import uniqueString from 'unique-string';
import { useState } from 'react';
const StoryFormRedux = ({
  theLocation,
  center,
  setTheLocation,
  setTheAddress,
  lat,
  lng,
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
            <label style={{ width: '174px' }} htmlFor="location">
              Enter Place
            </label>
            <input
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
        <label style={{ width: '174px' }} htmlFor="story">
          Enter your Story
        </label>
        <textarea
          style={{ height: '200px' }}
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
