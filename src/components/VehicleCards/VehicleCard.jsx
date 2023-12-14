import styles from "./VehicleCard.module.scss";

import Image from "next/image";

import Speed from "@/../public/speedometer.png";
import Patrol from "@/../public/patrol.png";
import Year from "@/../public/year-icon 1.png";
import Fwd from "@/../public/rwd.png";
import Gear from "@/../public/gear.png";

export default function VehicleCard(props) {
  return (
    <a target="_black" rel="noreferrer" className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.car_block}>
          <div
            style={{ backgroundImage: `url(${props.carImage})` }}
            className={styles.car_image}
          />
          <div className={styles.car_info}>
            <h3>{props.carTitle}</h3>
            <div className={styles.car_info_icons}>
              <div className={styles.icon_div}>
                <Image alt="Speed" src={Speed} width={23} height={16} />
                <p>{props.carMil} km</p>
              </div>
              <div className={styles.icon_div}>
                <Image alt="Year" src={Year} width={20} height={20} />
                <p>Year: {props.carYear}</p>
              </div>
              <div className={styles.icon_div}>
                <Image alt="Fuel" src={Patrol} width={16} height={20} />
                <p>{props.carFuel}</p>
              </div>

              <div className={styles.icon_div}>
                <Image alt="Transmission" src={Fwd} width={14} height={20} />
                <p>{props.carTrans}</p>
              </div>
              <div className={styles.icon_div}>
                <Image alt="Gearbox" src={Gear} width={21} height={20} />
                <p>{props.carGear}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.website_info}>
          <p>Website:</p>
          <div
            style={{ backgroundImage: `url(${props.website})` }}
            className={styles.website_img}
          />
          <p>Price: {props.carPrice} $</p>
        </div>
      </article>
    </a>
  );
}
