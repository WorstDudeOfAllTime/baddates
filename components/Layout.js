import styles from './../styles/Layout.module.css'
const Layout = ({children}) => {
  return(
    <div className={styles.container}>{children}</div>
  )
}