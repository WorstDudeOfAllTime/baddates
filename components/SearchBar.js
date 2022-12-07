import { useState } from 'react';
import logo from './../components/imgs/logo-no-background.png';
import Image from 'next/image';
import styles from './../styles/SearchBar.module.css';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.NEXT_PUBLIC_GM_API);
Geocode.setLanguage('en');
const SearchBar = ({ setCenter, setTheAddress }) => {
  const [dateSpot, setDateSpot] = useState('');
  const submitAddress = async () => {
    try {
      let localAddress = `${dateSpot}`;
      const response = await Geocode.fromAddress(localAddress);
      const { lat, lng } = await response.results[0].geometry.location;
      setTheAddress(localAddress);
      setCenter({ lat, lng });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`flexCent ${styles.navContainer}`}>
      <div className={`flexCent ${styles.logoBox}`}>
        <Image src={logo} alt="logo" height={80} />
      </div>
      <div className={styles.searchBox}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitAddress();
            setDateSpot('');
          }}
        >
          <label>
            Location Search:
            <input
            onSubmit={(e)=>{
              e.preventDefault();
              console.log('SENT!')
            }}
              type="text"
              value={dateSpot}
              onChange={(e) => {
                setDateSpot(e.target.value);
              }}
            ></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
