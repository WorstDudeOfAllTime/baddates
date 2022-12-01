import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import MarkerComp from './MarkerComp';
const Map = ({ data, setStory }) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 39.9526,
    lng: -75.1652,
  };

  return (
    <>
      <LoadScript googleMapsApiKey={}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {data.map((location, index) => {
          console.log(location);
            return (
              <MarkerComp
                key={`${index}-x-${location.lng}`}
                location={location}
                setStory={setStory}
              />
            );
          })}
          <MarkerF location={center}/>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
