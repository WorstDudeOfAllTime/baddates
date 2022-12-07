import { useState } from 'react';
import styles from './../styles/OverlayBox.module.css';
import Geocode from 'react-geocode';
import Comment from './../components/Comment';
const OverlayBox = ({
  setNewStory,
  newStory,
  theAddress,
  setTheAddress,
  setCenter,
  center,
  story,
  locationID,
  commentList,
  setNewComments,
  newComments,
}) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [comment, setComment] = useState('');

  //FUNCTIONS//
  const submitAddress = async () => {
    try {
      let localAddress = `${street} ${city}, ${state}`;
      const response = await Geocode.fromAddress(localAddress);
      const { lat, lng } = await response.results[0].geometry.location;
      console.log(response.results[0].geometry);
      setTheAddress(localAddress);
      setCenter({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };
  const submitStory = async () => {
    console.log('fired');
    try {
      const response = fetch('api/writedate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: 'Boot and Saddle',
          lat: center.lat,
          lng: center.lng,
          story: newStory,
        }),
      });
      setSuccessMessage('story posted!');
      setTheAddress(null);
      setNewStory('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };
  //const submitComments = async (comment) => {
  //  const response = fetch('api/writecomment', {
  //   method: 'POST',
  //   headers: {
  //    'Content-Type': 'application/json',
  //},
  //    body: JSON.stringify({
  //     comment: comment,
  //      storyID: locationID,
  //    }),
  //  });
  // };
  const clearInputs = () => {
    setStreet('');
    setCity('');
    setState('');
  };
  //END FUNCTIONS

  return (
    <div className={`flexCentCol ${styles.overlayBox}`}>
      <div className={styles.headBox}></div>
      <div className={styles.theForm}>
        {theAddress != null && (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                clearInputs();
                submitStory();
              }}
            >
              <label htmlFor="story">
                Input your story:
                <textarea
                  type="text"
                  id="story"
                  required={true}
                  value={newStory}
                  style={{
                    height: '200px',
                  }}
                  onChange={(e) => {
                    setNewStory(e.target.value);
                  }}
                ></textarea>
              </label>
              <button>Submit Story</button>
            </form>
          </>
        )}
      </div>
      <h3>{successMessage}</h3>
      <div className={styles.storyBox}>
        <p style={{ color: 'white' }}>{story}</p>
      </div>
    </div>
  );
};

export default OverlayBox;
