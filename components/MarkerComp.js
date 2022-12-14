import { MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import heart from './imgs/heart.png';
import styles from './../styles/MarkerComp.module.css';
const MarkerComp = ({
  location,
  setStory,
  setCenter,
  setLocationID,
  setCommentList,
  setTheAddress,
  setTheLocation
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
      animation={2}
      position={{
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng),
      }}
      onClick={() => {
        setTheLocation(location);
        setClicked(!clicked);
        console.log(location)
        dateFetcher();
        setStory((prevStory) => {
          return [location.story];
        });
        setLocationID();
        setTheAddress(location.address);
        setCenter({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lng),
        });
      }}
    />
  );
};

export default MarkerComp;
