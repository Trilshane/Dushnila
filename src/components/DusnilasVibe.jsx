import { useSelector } from "react-redux";
import styles from "../scss/dushnilasVibe.module.scss";

const DushnilasVibe = () => {
  const indicators = useSelector((state) => state.indicators.indicators);
  const dushnilaStatus = useSelector(
    (state) => state.indicators.dushnilaStatus
  );
  return (
    <div
      style={
        dushnilaStatus
          ? { backgroundColor: "#7AFFA7" }
          : { backgroundColor: "#FF8A7A" }
      }
      className={styles.container}
    >
      <div className={styles.dushnilasVibe}>
        {!dushnilaStatus ? "Душнила не доволен вами" : "Душнила доволен вами"}
      </div>
      {indicators.temp > 27 && indicators.co2 <= 800 && (
        <div className={styles.indicators}>Температура превышает норму</div>
      )}
      {indicators.co2 > 800 && indicators.temp <= 27 && (
        <div className={styles.indicators}>Co2 превышает норму</div>
      )}
      {indicators.temp <= 27 && indicators.co2 <= 800 && (
        <div className={styles.indicators}>Все показатели в норме</div>
      )}
      {indicators.temp > 27 && indicators.co2 > 800 && (
        <div className={styles.indicators}>
          Температура и Со2 <br /> превышают норму
        </div>
      )}
    </div>
  );
};

export default DushnilasVibe;
