"use client";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

import Logo from "@/../public/logo.png";
import Message from "@/../public/message.png";
import Sub from "@/../public/sub.png";
import User from "@/../public/user.png";

export default function Header() {
  const handleHover = (display) => {
    if (document.querySelector("#user-popup")) {
      document.querySelector("#user-popup").style.display = display;
    }
  };
  return (
    <header className={styles.root}>
      <article className={styles.wrapper}>
        <Image
          alt="FiVe"
          src={Logo}
          className={styles.logo}
          width={160}
          height={112}
          priority
        />
        <div className={styles.icons_block}>
          <div className={styles.language_block}>
            <p className={styles.current_lang}>Ua</p>
            <span>|</span>
            <p>Eng</p>
          </div>
          <Image alt="Message" src={Message} width={33} height={30} />
          <Image alt="Sub" src={Sub} width={36} height={36} />
          <Link href={"/profile"}>
            <Image
              alt="User"
              src={User}
              width={33}
              height={33}
              onMouseOver={() => handleHover("grid")}
              onClick={() => handleHover("none")}
            />
          </Link>
          {/* <UserPopup /> */}
        </div>
      </article>
    </header>
  );
}
