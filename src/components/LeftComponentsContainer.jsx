import DushnilasVibe from "./DusnilasVibe";

import styles from "../scss/leftComponentsContainer.module.scss";
import MiniComponentsContainer from "./MiniComponentsContainer";

const LeftComponentsContainer = () => {
  return (
    <div className={styles.container}>
      <DushnilasVibe />
      <MiniComponentsContainer />
    </div>
  );
};

export default LeftComponentsContainer;
