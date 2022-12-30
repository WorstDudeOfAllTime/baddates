import { MarkerF } from '@react-google-maps/api';
import { useState } from 'react';
import styles from './../styles/MarkerComp.module.css';
const MarkerComp = ({
  location,
  setStory,
  setLocationID,
  setCommentList,
  setTheAddress,
  setTheLocation,
}) => {
  const [clicked, setClicked] = useState(false);

  const dateFetcher = async () => {
    try {
      let dateResponse = await fetch('/api/finddates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location_Id: `${location.location_Id}`,
        }),
      });
      let dateData = await dateResponse.json();
      setStory(dateData);
    } catch (err) {
      console.log('NO GOOD');
      console.log(err);
    }
  };
  const commentFetcher = async () => {
    try {
      let commentResponse = await fetch(`/api/findcomments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentID: `${location._id}`,
        }),
      });
      let allComments = await commentResponse.json();
      setCommentList(allComments);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MarkerF
      key={'heart-tattoo'}
      animation={2}
      icon={{
        url: `https://i.imgur.com/8yuSM05.png`,
        scaledSize: new google.maps.Size(65, 65)
      }}
      position={{
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng),
      }}
      onClick={() => {
        console.log(location)
        setTheLocation(location);
        setClicked(!clicked);
        dateFetcher();
        setStory((prevStory) => {
          return [location.story];
        });
        setLocationID();
        setTheAddress(location.location);
      }}
    >
      <div className={styles.heartMarker}></div>
    </MarkerF>
  );
};

export default MarkerComp;
