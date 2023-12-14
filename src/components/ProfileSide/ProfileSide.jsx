import styles from "./ProfileSide.module.scss";

import Image from "next/image";

import Profile from "@/../public/profile.png";
import Link from "next/link";

export default function ProfileSide({ user }) {
  return (
    <aside className={styles.root}>
      <article className={styles.wrapper}>
        <Image width={300} height={300} src={Profile} alt="Profile user" />
        {user ? (
          <>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </>
        ) : (
          <>
            <h2>Loading...</h2>
            <p>Loading...</p>
          </>
        )}
        <Link href={"/"}>Повернутись на головну</Link>
      </article>
    </aside>
  );
}
