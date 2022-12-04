import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import { useState } from 'react';
import MarkerComp from './MarkerComp';
const Map = ({
  data,
  setStory,
  center,
  setCenter,
  setLocationID,
  setCommentList,
  newComments,
}) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GM_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {data.map((location, index) => {
            return (
              <MarkerComp
                key={`${index}-x-${location.lng}`}
                location={location}
                setStory={setStory}
                setCenter={setCenter}
                setLocationID={setLocationID}
                setCommentList={setCommentList}
                newComments={newComments}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
