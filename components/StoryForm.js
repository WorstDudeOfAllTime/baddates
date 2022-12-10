import { useFormik } from 'formik';
const StoryForm = ({ address }) => {
  const formik = useFormik({
    initialValues: {
      address,
      location: 'boot and saddle',
      lat: 39.245,
      lng: -75.123,
      date: Date.now(),
      story: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div style={{height: '100%'}}>
      <form className={'flexCentCol'} onSubmit={formik.handleSubmit}>
        <label htmlFor="story">Enter your Story</label>
        <input
          id="story"
          name="story"
          onChange={formik.handleChange}
          value={formik.values.story}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StoryForm;
