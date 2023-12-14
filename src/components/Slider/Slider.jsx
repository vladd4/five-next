"use client";

import styles from "./Slider.module.scss";

import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import Car from "@/../public/porsche-main-image.png";
import Tg from "@/../public/telegram-icon.png";

export default function Slider() {
  return (
    <Splide
      options={{
        height: "100%",
        width: "100%",
        type: "loop",
        focus: "center",
        drag: true,
        perPage: 1,
        arrows: false,
        pagination: true,
      }}
      className={styles.root}
    >
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <Image alt="Telegram" src={Tg} width={128} height={70} />
            </p>
          </div>
          <Image alt="Porsche" src={Car} width={310} height={120} />
        </article>
      </SplideSlide>
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <Image alt="Telegram" src={Tg} width={128} height={70} />
            </p>
          </div>
          <Image alt="Porsche" src={Car} width={310} height={120} />
        </article>
      </SplideSlide>
      <SplideSlide id="slide">
        <article className={styles.article}>
          <div className={styles.text_block}>
            <h3>
              хочеш бачити <b>свіжі</b> пропозиції?
            </h3>
            <p>
              Тоді оформляй підписку та отримуй пропозиції в Телеграм.
              <Image alt="Telegram" src={Tg} width={128} height={70} />
            </p>
          </div>
          <Image alt="Porsche" src={Car} width={310} height={120} />
        </article>
      </SplideSlide>
    </Splide>
  );
}
