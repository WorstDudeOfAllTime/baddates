import { MarkerF } from '@react-google-maps/api';
import { useEffect } from 'react';
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
      position={{
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng),
      }}
      onClick={() => {
        setStory(location.newStory);
        setLocationID(location._id);
        commentFetcher();
        setCenter({
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lng),
        });
      }}
    />
  );
};

export default MarkerComp;
