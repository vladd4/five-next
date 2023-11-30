import CarSkeleton from "../CarSkeleton";
import SideBar from "../SideBar/SideBar";
import VehicleCards from "../VehicleCards/VehicleCards";
import styles from "./VehicleBlock.module.scss";

export default function VehicleBlock() {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <SideBar />
        <VehicleCards />
      </article>
    </section>
  );
}
