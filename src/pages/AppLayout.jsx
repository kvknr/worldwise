//Imports
//Custom Imports
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

//Component AppLayout
function AppLayout() {
  //JSX Return Statement
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

//Exports
export default AppLayout;
