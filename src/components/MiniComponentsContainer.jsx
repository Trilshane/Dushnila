import styles from "../scss/miniComponentsContainer.module.scss";
import DaysWithoutStuffiness from "./DaysWithoutStuffiness";
import LogoContainer from "./LogoContainer";

const MiniComponentsContainer = () => {
  return (
    <div className={styles.container}>
      <DaysWithoutStuffiness />
      <LogoContainer />
    </div>
  );
};

export default MiniComponentsContainer;
