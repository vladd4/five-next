"use client";

import styles from "./VehicleCards.module.scss";
import VehicleCard from "./VehicleCard";

import Image from "next/image";

import Sort from "@/../public/Sort.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/slices/carsSlice";
import CarSkeleton from "../CarSkeleton";

export default function VehicleCards() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.top_block}>
          <p>Показано {cars && cars.cars.length} оголошень із 10</p>
          <Image alt="Sort" src={Sort} width={60} height={60} />
        </div>
        <div className={styles.vehicle_cards}>
          {cars && cars.status === "loading"
            ? [...new Array(5)].map((_, index) => {
                return <CarSkeleton key={index} />;
              })
            : cars.cars.map((car) => {
                const carName = `${car.brand} ${car.model}`;
                return (
                  <VehicleCard
                    key={car.car_id}
                    carImage={car.photo_url}
                    carTitle={carName}
                    website={car.site_photo_url}
                    carPrice={car.price}
                    carFuel={car.fuel}
                    carYear={car.year}
                    carMil={car.mileage}
                    carGear={car.gearbox}
                    carTrans={car.transmission}
                    websiteLink={car.site_url}
                  />
                );
              })}
        </div>
      </article>
    </section>
  );
}
