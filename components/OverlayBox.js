import { useState } from 'react';
import styles from './../styles/OverlayBox.module.css';
const OverlayBox = ({
  newLat,
  setNewLat,
  newLong,
  setNewLong,
  story,
  setNewStory,
  newStory,
}) => {
  const [storyMode, setStoryMode] = useState(false);
  const getDates = async () => {
    console.log('Fired');
    const response = await fetch('/api/finddates', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data.data);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    let res = await fetch('/api/writedate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lat: newLat,
        long: newLong,
        story: newStory,
      }),
    });
  };
  return (
    <div className={styles.overlayBox}>
      {storyMode ? (
        <></>
      ) : (
        <>
          <div className={styles.headBox}>
            <h1>Bad Dates</h1>
          </div>
          <div className={styles.theForm}>
            <h3>Enter Address</h3>
            <form
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <input
                value={newLat}
                onChange={(e) => {
                  setNewLat(e.target.value);
                }}
              ></input>
              <input
                value={newLong}
                onChange={(e) => {
                  setNewLong(e.target.value);
                }}
              ></input>
              <input
                value={newStory}
                onChange={(e) => {
                  setNewStory(e.target.value);
                }}
              ></input>
              <button>Submit</button>
            </form>
          </div>

          <div className={styles.storyBox}>
            {story && <p>{story}</p>}
            <button
              onClick={() => {
                setStoryMode(true);
              }}
            >
              Add a Story!
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OverlayBox;
