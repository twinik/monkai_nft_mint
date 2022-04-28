import styles from "./index.module.css";
import { HomeScreen, VisionScreen, MintScreen } from "../components/Sections";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <HomeScreen />
      <MintScreen />
      <VisionScreen />
    </div>
  );
}
