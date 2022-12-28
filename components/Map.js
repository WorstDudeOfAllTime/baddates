import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Autocomplete,
  Marker,
  MarkerF,
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
  setTheAddress,
  setTheLocation,
  setLat,
  setLng
}) => {
  const [mapPlace, setMapPlace] = useState('');
  const [currentLocation, setCurrentLocation] = useState(false);
  const [clickMarker, setClickMarker] = useState(false);
  const containerStyle = {
    width: '98%',
    height: '98%',
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
      return { lat: parseFloat(lat), lng: parseFloat(lng) };
    } catch (err) {
      console.log(err);
    }
  };

  const getAddress = async (lat, long) => {
    try {
      const response = await Geocode.fromLatLng(lat, long);
        return response.results[0].formatted_address;
    } catch (err) {
      console.log(err);
    }
  };

  const clearPlace = () => {
    setStory([]);
    setTheLocation(null)
  }
  return (
    <div
      className={`flexCent`}
      style={{ height: '100%', width: '100%', margin: '0' }}
    >
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GM_API}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={async (e) => {
            clearPlace();
            setLat(prevLat => {return e.latLng.lat()});
            setLng(prevLng => {return e.latLng.lng()});
            const newAddy = await getAddress(e.latLng.lat(), e.latLng.lng());
            setTheAddress(newAddy);
            setCenter((prevCenter) => {
              return { lat: e.latLng.lat(), lng: e.latLng.lng() };
            });
            setCurrentLocation(true);
          }}
        >
          <StandaloneSearchBox>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setCenter(await submitAddress(mapPlace));
                setTheAddress(mapPlace);
                setMapPlace('');
                setCurrentLocation(true);
              }}
            >
              <input
                type="text"
                placeholder="Enter Address/Location"
                style={inputStyle}
                value={mapPlace}
                onClick={(e) => {
                  setMapPlace(e.target.value);
                  setTheLocation(null);
                  setTheAddress(null)
                  setClickMarker(false);
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
                setLocationID={setLocationID}
                setCommentList={setCommentList}
                newComments={newComments}
                setTheAddress={setTheAddress}
                setTheLocation={setTheLocation}
              />
            );
          })}
          {currentLocation && (
            <MarkerF
              position={{
                lat: center.lat,
                lng: center.lng,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
