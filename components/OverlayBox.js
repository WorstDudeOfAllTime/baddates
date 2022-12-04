import { useState } from 'react';
import styles from './../styles/OverlayBox.module.css';
import Geocode from 'react-geocode';
import Image from 'next/image';
import logo from './../components/imgs/logo-no-background.png';
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
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [comment, setComment] = useState('');

  //FUNCTIONS//
  const submitAddress = async () => {
    try {
      let localAddress = `${street} ${city}, ${state}`;
      const response = await Geocode.fromAddress(localAddress);
      const { lat, lng } = await response.results[0].geometry.location;
      console.log(response.results[0].geometry)
      setTheAddress(localAddress);
      setCenter({ lat, lng });
    } catch(err){
      console.log(err)
    }

  };
  const submitStory = async () => {
    try {
      const response = fetch('api/writedate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lat: center.lat,
          lng: center.lng,
          newStory,
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
      <div className={styles.headBox}>
        <Image src={logo} alt="logo" height={55} />
      </div>
      <div className={styles.theForm}>
        {theAddress != null ? (
          <>
            <h3>{theAddress}</h3>
            <button
              onClick={() => {
                setTheAddress(null);
                clearInputs();
              }}
            >
              Change Address
            </button>
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
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitAddress();
            }}
          >
            <label htmlFor="addressInput">
              Add your location:
              <input
                type="text"
                required={true}
                id="addressInput"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                placeholder="Address/Location"
              ></input>
              <input
                type="text"
                required={true}
                id="addressInput"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="City"
              ></input>
              <input
                type="text"
                required={true}
                id="stat"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                placeholder="State"
              ></input>
            </label>
            <button>Submit Address</button>
          </form>
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
