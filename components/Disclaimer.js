import styles from './../styles/Disclaimer.module.css'
const Disclaimer = ({setReady}) => {
  return(
    <div className={`flexCentCol ${styles.disclaimerContainer}`}>
      <p>Hello and welcome to BadDates: a place to anonymously submit and discuss bad date stories! As we all know, the world of dating is a chaotic and tumultuous place. 
      While BadDates is meant to be in good fun and will be moderated, we do encourage stories of all types and feel it is important that you
      proceed with caution due to a potential for disturbing content and triggers. </p>
      <button className={styles.buttons} onClick={() => {
        setReady(true);
      }}>Enter!</button>
    </div>
  )
}

export default Disclaimer;