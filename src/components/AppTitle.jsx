import styles from "../styles/modules/title.module.scss";

function AppTitle({ children, ...rest }) {
  return <div className={styles.title}{...rest}>{children}</div>;
}

export default AppTitle;
