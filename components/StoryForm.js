import { useFormik } from 'formik';
import { Formik } from 'formik';
import { useState } from 'react';
import uniqueString from 'unique-string';
const StoryForm = ({ theLocation, center, setTheLocation, setTheAddress, lat, lng }) => {
  const submitStory = async (values) => {
    try {
      const data = await fetch('/api/writedate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const submitLocation = async (values) => {
    try {
      const data = await fetch('/api/writelocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      location: !theLocation ? '' : theLocation.location,
      location_Id: !theLocation ? uniqueString() : theLocation.location_Id,
      date_Id: uniqueString(),
      lat: lat,
      lng: lng,
      date: Date.now(),
      story: '',
    },
    onSubmit: (values) => {
      if (theLocation) {
        submitStory(values);
      } else {
        submitStory(values);
        submitLocation(values);
      }
      formik.resetForm();
      setTheLocation(null);
      setTheAddress(null)
    },
  });
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <form className={'flexCentCol'} onSubmit={formik.handleSubmit}>
        {theLocation === null ? (
          <>
            <label style={{ width: '174px' }} htmlFor="location">
              Enter Place
            </label>
            <input
              type="text"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            ></input>
          </>
        ) : (
          <></>
        )}
        <label style={{ width: '174px' }} htmlFor="story">
          Enter your Story
        </label>
        <textarea
          style={{ height: '200px' }}
          id="story"
          name="story"
          onChange={formik.handleChange}
          value={formik.values.story}
        ></textarea>
        <input name="lat" value={formik.values.lat}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;
