import { useState } from 'react';
import logo from './../components/imgs/logo-no-background.png';
import Image from 'next/image';
import styles from './../styles/SearchBar.module.css';
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
        <Image src={logo} alt="logo" height={70} />
      </div>
      <div className={styles.searchBox}>
      </div>
    </div>
  );
};

export default SearchBar;
