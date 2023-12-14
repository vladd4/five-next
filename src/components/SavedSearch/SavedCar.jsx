import styles from "./SavedSearch.module.scss";

import Image from "next/image";

import Delete from "@/../public/delete.png";
import { useDispatch } from "react-redux";
import { deleteSaved } from "@/redux/slices/savedSlice";

export default function SavedCar({ savedCar }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteSaved(id));
  };
  return (
    <div className={styles.values}>
      <Image
        width={18}
        height={18}
        alt="Delete icon"
        src={Delete}
        onClick={() => {
          handleDelete(savedCar.id);
        }}
      />
      <p>{savedCar.brand}</p>
      <p>{savedCar.model}</p>
      <p>{savedCar.gearbox}</p>
      <p>{savedCar.state}</p>
      <p>{savedCar.fuel}</p>
      <p>{savedCar.transmission}</p>
      <div>
        <p>{savedCar.min_year} - </p>
        <p> {savedCar.max_year}</p>
      </div>
      <div>
        <p>{savedCar.min_price} - </p>
        <p> {savedCar.max_price}$</p>
      </div>
      <p>{savedCar.telegram === 1 ? "Yes" : "No"}</p>
    </div>
  );
}
