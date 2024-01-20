import styles from "../scss/logoContainer.module.scss";
import logo from "../images/Logo.svg";

const LogoContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="img" />
      </div>
    </div>
  );
};
export default LogoContainer;
