import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Autocomplete
} from '@react-google-maps/api';
import { useState } from 'react';
import MarkerComp from './MarkerComp';
const libraries = ['places'];
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.NEXT_PUBLIC_GM_API);
Geocode.setLanguage('en');
const Map = ({
  data,
  setStory,
  center,
  setCenter,
  setLocationID,
  setCommentList,
  newComments,
}) => {
  const [mapPlace, setMapPlace] = useState('');

  const containerStyle = {
    width: '95%',
    height: '95%',
    border: '10px solid red',
    borderBottomRightRadius: '20px',
  };
  const inputStyle = {
    boxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    padding: `0 12px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
    position: 'absolute',
    top: '10px',
    right: '10px',
  };
  const submitAddress = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      const { lat, lng } = await response.results[0].geometry.location;
      console.log(response.results[0].geometry);
      setCenter({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`flexCent`} style={{ height: '100%', width: '100%' }}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GM_API}
        libraries={libraries}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <StandaloneSearchBox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitAddress(mapPlace);
              }}
            >
              <input
                type="text"
                placeholder="Enter Address/Location"
                style={inputStyle}
                value={mapPlace}
                onClick={(e) => {
                  setMapPlace(e.target.value);
                }}
                onChange={(e) => {
                  setMapPlace(e.target.value);
                }}
              />
            </form>
          </StandaloneSearchBox>
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
    </div>
  );
};

export default Map;
