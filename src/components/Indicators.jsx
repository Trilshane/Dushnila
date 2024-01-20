import styles from "../scss/indicators.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Indicators = () => {
  const indicators = useSelector((state) => state.indicators.indicators);
  const dushnilaStatus = useSelector(
    (state) => state.indicators.dushnilaStatus
  );

  return (
    <div
      style={
        dushnilaStatus
          ? {
              background:
                "linear-gradient(126deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 255, 87, 0.60) 100%)",
            }
          : {
              background:
                "linear-gradient(126deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 138, 122, 0.60) 100%)",
            }
      }
      className={styles.container}
    >
      <div className={styles.indicators}>
        <div className={styles.indicatorContainer}>
          <div className={styles.data}>{indicators.temp} °C</div>
          <div className={styles.description}>Температура</div>
        </div>
        <div className={styles.indicatorContainer}>
          <div className={styles.data}>{Math.floor(indicators.co2)} ppm</div>
          <div className={styles.description}>CO2</div>
        </div>
      </div>
    </div>
  );
};
export default Indicators;
