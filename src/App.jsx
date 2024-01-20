import { useEffect } from "react";
import styles from "./App.module.scss";
import Indicators from "./components/Indicators";
import LeftComponentsContainer from "./components/leftComponentsContainer";
import { useDispatch } from "react-redux";
import { fetchIndicators } from "./store/indicatorsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndicators());
    setInterval(() => {
      dispatch(fetchIndicators());
    }, 60000);
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.title}>ДУШНИЛА</h1>
      <div className={styles.container}>
        <LeftComponentsContainer />
        <Indicators />
      </div>
    </>
  );
}

export default App;
