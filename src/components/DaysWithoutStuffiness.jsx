import styles from "../scss/daysWithoutStuffiness.module.scss";

const DaysWithoutStuffiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Дней без душноты {Math.floor(Math.random() * 9)}
      </div>
      <div className={styles.button}>
        <div className={styles.buttonText}>История</div>
        <div className={styles.buttonArrowContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DaysWithoutStuffiness;
