import { MarkerF } from '@react-google-maps/api';
import { useEffect } from 'react';
import heart from './imgs/heart.png'
import styles from './../styles/MarkerComp.module.css'
const MarkerComp = ({
  location,
  setStory,
  setCenter,
  setLocationID,
  setCommentList,
  newComments,
}) => {

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
    animation={1}
    
    className={styles.leaningHeart}
      position={{
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng),
      }}
      onClick={() => {
        console.log(location);
        setStory(location.story);
        setLocationID(location._id);
        //commentFetcher();
        console.log()
        setCenter({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lng),
        });
      }}
    />
  );
};

export default MarkerComp;
