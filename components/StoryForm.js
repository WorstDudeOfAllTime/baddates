import { useFormik, resetForm } from 'formik';
import uniqueString from 'unique-string';
const StoryForm = ({ theLocation, address, lat, lng }) => {
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
    console.log(values);
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
      address: address,
      location: '',
      location_Id: !theLocation ? uniqueString() : theLocation.location_Id,
      date_Id: uniqueString(),
      lat,
      lng,
      date: Date.now(),
      story: '',
    },
    onSubmit: (values) => {
      if (theLocation) {
        submitStory(values);
        formik.resetForm();
      } else {
        submitStory(values);
        submitLocation(values);
        formik.resetForm();
      }
    },
  });
  return (
    <div style={{ height: '100%' }}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;
