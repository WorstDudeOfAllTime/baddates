import { MarkerF } from '@react-google-maps/api';
const MarkerComp = ({ location, setStory }) => {
  return (
    <MarkerF
      position={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }}
      onClick={() => {
        console.log('ive been clicked');
        setStory(location.story);
      }}
    />
  );
};

export default MarkerComp;
